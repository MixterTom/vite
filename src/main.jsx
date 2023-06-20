import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App.jsx";
import "./index.scss";
import Body from "./components/Body2/Body.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Footer/Footer.jsx";
import "./components/Responsive/Responsive.scss";
import Contact from "./components/Contact/Contact.jsx";
import Full from "./components/Full/Full.jsx";
import "react-slideshow-image/dist/styles.css";
import { ThemeProvider } from "../utils/ThemeContext.jsx";
import { LoginProvider } from "../utils/LoginContect.jsx";
import { ScroolProvider } from "../utils/ScroolContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <LoginProvider>
        <ScroolProvider>
          <Full></Full>
          <Body></Body>
          <Footer></Footer>
          <Contact></Contact>
          <App />
        </ScroolProvider>
      </LoginProvider>
    </ThemeProvider>
  </React.StrictMode>
);
