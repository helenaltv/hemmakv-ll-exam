import { useEffect } from "react";

const MetaTags = ({ title, description }) => {
  useEffect(() => {
    // Ställ in titeln
    document.title = title;

    // Skapa och ställ in meta-beskrivning
    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    // Skapa och ställ in Open Graph-taggar
    const ogTitle = document.querySelector("meta[property='og:title']");
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    } else {
      const metaOgTitle = document.createElement("meta");
      metaOgTitle.setAttribute("property", "og:title");
      metaOgTitle.content = title;
      document.head.appendChild(metaOgTitle);
    }

    const ogDescription = document.querySelector(
      "meta[property='og:description']"
    );
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    } else {
      const metaOgDescription = document.createElement("meta");
      metaOgDescription.setAttribute("property", "og:description");
      metaOgDescription.content = description;
      document.head.appendChild(metaOgDescription);
    }

    // Rensa meta-taggar vid avmontering
    return () => {
      document.title = ""; // Återställ titel om nödvändigt
      document.head
        .querySelectorAll(
          "meta[name='description'], meta[property='og:title'], meta[property='og:description']"
        )
        .forEach((meta) => {
          document.head.removeChild(meta);
        });
    };
  }, [title, description]);

  return null; // Komponent behöver inte rendera något
};

export default MetaTags;
