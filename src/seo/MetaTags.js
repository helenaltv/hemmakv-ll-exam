import { Helmet } from "react-helmet-async";

const MetaTags = ({ title, description, keywords }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta name="keywords" content={keywords.join(", ")} />
  </Helmet>
);
