# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# hemmakv-ll-exam

# HEMMAKVÄLL:

Hemmakväll är en film-sökningsapplikation som gör det möjligt för användare att söka efter filmer, spara dem som favoriter, kunna med en knapp lägga till och ta bort filmer från favorite listan och visa detaljer om varje film. Applikationen använder OMDb API för att hämta filmdata.

# Funktioner:

- Söka filmer genom att använda OMDb API.
- Se detaljerad information för varje film.
- Lägga till och ta bort filmer från favorit listan.
- Spara favoriter i lokal lagring

Applikationen använder Redux, React Router, och Google Tag Manager, react-router-dom för att navigera mellan olika sidor: Home, MovieDetails, och Favorites. Varje sida har sin egen rutt definierad i <Routes>, vilket gör det enkelt att navigera mellan sidorna. Redux används för global tillståndshantering, och Provider-komponenten från Redux omsluter App för att ge tillgång till tillstånd och actions som finns i Redux-butiken (store). Detta gör att komponenter kan läsa och uppdatera det globala tillståndet.
Tag Manager gör det möjligt att spåra användarbeteende och samla in data för analytik utan att behöva direktintegrera koden för varje spårningsverktyg. Här används GTM-PMZVC96N som är ID för Tag Manager-konfigurationen.

Magataggar sätter sidans titel, som visas i webbläsarens flik och i sökresultat,
description ger kort sammanfattning av sidans innehåll, viktig för SEO och keywords visar relevanta söktermer för att hjälpa sökmotorer att förstå sidans ämne.

# index.html

Det är basstrukturen för applikationen och inkluderar Google Tag Manager (GTM) och Google Analytics för att spåra användarinteraktioner. GTM-koden initieras både i script-taggar i <head> och <noscript> för att stödja användare som har JavaScript avaktiverat.

# Sidor

1. Hemma-sidan (`src/pages/Home.jsx`)

Hemsidan erbjuder ett sökgränssnitt för användare att hitta filmer. Användare kan ange ett sökord och efter att ha skickat formuläret hämtar applikationen filmdat från OMDb API. Resultaten visas som en lista över filmer med en titel, år och bild.
Genom att klicka på en film kommer masn till filmbeskrivningen.

2. Favoriter-sidan (`src/pages/Favorites.jsx`)

Favoriter-sidan visar en lista över filmer som användaren har markerat som favoriter. Filmer hämtas från lokal lagring. Användare kan klicka på en favoritfilm för att se dess detaljer eller ta bort den från sin favoritlista med en papperskorgsikon.
Hantering av favoriter lagras i store.
Favoritlista sparas i webbläsarens lokala lagring för att hålla informationen sparad även när användaren lämnar applikationen.

3. Film Detaljer-sidan (`src/pages/MovieDetails.jsx`)

Film Detaljer-sidan visar omfattande information om en vald film, inklusive titel, år, genre, handling och affisch. Användare kan också lägga till filmen i sin favoriterlista med en knapp.

# Här finns också 5 st komponenter:

1. FavoriteButton.jsx
   FavoriteButton är en komponent som hanterar om en film är tillagd som favorit.
   Knappens hantering av favorittillstånd: Genom useState och useEffect kontrollerar knappen om filmen redan finns i favoriter. Vid laddning av komponenten hämtas favoriterna från localStorage, och knappen uppdateras för att reflektera om filmen är en favorit eller ej.

Lägga till och ta bort favoriter: toggleFavorite-funktionen lägger till eller tar bort filmen från localStorage beroende på om filmen redan finns i favoriterna. Om filmen redan är en favorit visas texten "Ta bort från favoriter"; annars visas "Lägg till i favoriter".

2. FavoritesList.jsx
   FavoritesList visar en lista över användarens favoritfilmer.
   Den använder useSelector för att hämta favoritfilmer från Redux-storen.

Tar bort favoriter med dispatch och Redux-åtgärden.
Varje film visas med sin titel och en knapp för att ta bort filmen från favoriterna.

3. MovieCard.jsx
   MovieCard visar information om filmen samt en knapp för att lägga till den i favoriterna.

Genom Link från react-router-dom görs det möjligt att klicka sig vidare till en detaljerad vy av filmen via en länk.

4. MovieList.jsx
   MovieList är en komponent som ansvarar för att visa en lista av MovieCard-komponenter, vilket innebär att varje film visas som ett kort.

Tar emot en lista med filmer som props och upprepar dessa för att generera ett MovieCard-kort för varje film.

5. NavigationMenu.jsx
   NavigationMenu är en komponent som visar huvudnavigeringen för applikationen.

Den nvänder Link-komponenten från react-router-dom för att länka till startsidan (Home) och favoritsidan (Favorites).

Applikationen är konfigurerad för att skicka sidvisningsdata till Google Analytics. Detta görs genom att använda Google Analytics 4 via ReactGa. Varje gång användaren navigerar till en ny sida skickas en sidvisning (pageview) med den aktuella URL
, vilket gör att användarbeteendet kan analyseras.

Jag använde Cypress verkytget för att testa applikationen och verifiera att FavoritesList-komponenten fungerar korrekt genom att testa rendering och funktionalitet för att lägga till och ta bort favoritfilmer.

För varje test körs beforeEach-funktionen, som gör följande:
Besöker applikationen på http://localhost:5173/.
Använder cy.window() för att få tillgång till webbläsarfönstrets window-objekt och sedan dispatcha en fetchMovies-åtgärd i applikationens Redux-store.

Genom att köra denna dispatch-åtgärd fyller testet favoritlistan med två filmer, "Movie 1" och "Movie 2", för att säkerställa att listan har data för testerna.

Testet kontrollerar att elementet med klassen .favorites-list existerar.
Kontrollerar att två filmer renderas korrekt genom att förvänta sig två <h3>-element (en för varje film i favoritlistan).
Testar om användaren kan ta bort en film från favoritlistan och att listan uppdateras därefter.
"Movie 1" finns som en favorit och säkerställer att Movie 1 är synlig i listan.
Klickar på den första "ta bort"-knappen för att ta bort Movie 1.
Kontrollerar att listan nu bara innehåller ett objekt.
Säkerställer att Movie 1 inte längre finns i listan, vilket bekräftar att borttagningen fungerade korrekt.

# CSS

Det är ett färgglatt och responsivt filmtema med en bio-liknande känsla. Varje komponent har en egen stilfil som bidrar till användarupplevelsen på ett sätt som liknar en streamingtjänst eller en biosida.

Home.css - strukturerade för att visa filmer i ett rutnät om fyra kolumner.
FavoritesList.css - stilar förstärker en tydlig action-känsla för att lägga till eller ta bort favoriter.

Favorites.css - Här används papperskorg ikon som förstärker tydligheten för borttagningsfunktionen.

MovieCard.css - Skapar en stil för filmkort. Knapparna på korten har en grön färg för att antyda en positiv action (t.ex. lägga till i favoriter).

MovieDetails.css - Skapar stilen för filmens detaljer, med stora rubriker och tydlig textlayout för att ge användarna en lättläst och informativ.

MovieList.css - Använder ett responsivt rutnät för att visa en lista över filmer. Korten är centrerade med en enkel skugga och bakgrund som ger en ren visning av varje filmtitel, text och actions.

NavigationMenu.css - Stilar för navigationsmenyn. Länkar har en blå färg som ändras till en mörkare nyans vid hover, vilket indikerar interaktivitet. Menyn är ren och enkel med subtila skuggor och rundade hörn.
