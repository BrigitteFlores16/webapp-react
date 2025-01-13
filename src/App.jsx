import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layout/DefaultLayout.jsx";
import HomePage from "../pages/Homepage.jsx";
import AboutPage from "../pages/Aboutpage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} path="/">
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
