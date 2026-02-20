import React from "react";
import ReactDOM from "react-dom/client";
import ThemeProvider from "./context/ThemeContext";
import Home from "./home";
import "./assets/styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Home />
  </ThemeProvider>
);

