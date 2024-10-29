import React from "react";
import { Link } from "react-router-dom";
import "../css/NavigationMenu.css";

const NavigationMenu = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
    </nav>
  );
};

export default NavigationMenu;
