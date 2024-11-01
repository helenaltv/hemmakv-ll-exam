import "./App.css";
import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import NavigationMenu from "./components/NavigationMenu";
import ReactGa from "react-ga4";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const TRACKING_ID = "G-4LK5B4E27J"; // Google Analytics Tracking ID
ReactGa.initialize(TRACKING_ID);

const App = () => {
  const [favorites, setFavorites] = useState([]);
  const location = useLocation();

  useEffect(() => {
    ReactGa.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  const addToFavorites = (movie) => {
    const updatedFavorites = [...favorites, movie];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<Home addToFavorites={addToFavorites} />} />
        <Route path="/movies/:id" element={<MovieDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
