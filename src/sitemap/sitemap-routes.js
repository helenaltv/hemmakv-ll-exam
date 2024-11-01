// sitemap-routes.js
const routes = [
  {
    path: "/",
    priority: 1.0,
  },
  {
    path: "/movies/:id",
    priority: 0.7,
  },
  {
    path: "/favorites",
    priority: 0.7,
  },
  // Lägg till fler rutter om det behövs
];

export default routes;
