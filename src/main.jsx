import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { HashRouter } from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);

/// auto import, prettier, auto rename, es7 react redux gra etc
/// API key: 55bb0acb46a61016543cb0c61a9101ab
/// TEST: https://api.themoviedb.org/3/movie/popular?api_key=55bb0acb46a61016543cb0c61a9101ab
