import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout.jsx";
import Home from "./components/Pages/Home.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/*User Layout*/}
          <Route index element={<Home />} />
        </Route>

        <Route>{/*Admin Layout*/} </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
