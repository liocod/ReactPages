import React from "react";
import { Route, Routes } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import "./styles/index.scss";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Accueil />} />
      </Routes>
    </div>
  );
};

export default App;
