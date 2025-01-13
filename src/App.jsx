import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieIndexPage from "../movies/moviesindexpage.jsx";
import MovieShowPage from "../movies/moviesshowpage.jsx";

import DefaultLayout from "./layout/DefaultLayout";
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
        <Route path="movies">
          <Route index element={<MovieIndexPage />} />
          <Route path=":id" element={<MovieShowPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
