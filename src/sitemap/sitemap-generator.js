import routes from "./sitemap-routes";
import { Sitemap } from "react-router-sitemap";

function generateSitemap() {
  // Ange din egen domän i hostname
  const sitemap = new Sitemap(routes)
    .build("https://your-actual-domain.com") // Ersätt med din egen domän
    .save("./public/sitemap.xml"); // Sparar i public-mappen

  console.log("Sitemap generated successfully!");
}

generateSitemap();
