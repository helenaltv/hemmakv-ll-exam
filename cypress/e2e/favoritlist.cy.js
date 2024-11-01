describe("FavoritesList Component", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/");
    cy.window().then((win) => {
      win.store.dispatch(
        fetchMovies.fulfilled({
          type: "favorites/addFavorite",

          imdbID: "1",
          Title: "Movie 1",
          Type: "movie",
          Poster: "poster1.jpg",

          payload: [
            { imdbID: "1", Title: "Movie 1" },
            { imdbID: "2", Title: "Movie 2" },
          ],
        })
      );
    });
  });

  it("should render the list of favorite movies", () => {
    cy.get(".favorites-list").should("exist"); // Kontrollera att listan existerar
    cy.get(".favorites-list h3").should("have.length", 2); // Kontrollera att det finns två filmer
  });

  it("should remove a movie from favorites", () => {
    // Förutsätt att filmen har lagts till som favorit
    cy.get(".favorites-list h3").first().contains("Movie 1"); // Kontrollera att "Movie 1" finns i listan

    // Klicka på ta bort-knappen
    cy.get(".favorites-list button").first().click();

    // Kontrollera att "Movie 1" inte längre finns i listan
    cy.get(".favorites-list h3").should("have.length", 1); // Kontrollera att listan nu har ett objekt
    cy.get(".favorites-list h3").should("not.contain", "Movie 1"); // Kontrollera att "Movie 1" inte längre finns
  });
});
