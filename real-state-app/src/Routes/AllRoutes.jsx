import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Property from "../Pages/Property";
import PropertyDetails from "../Components/PropertyDetails";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property" element={<Property />} />
      <Route path="/property/:id/:title" element={<PropertyDetails />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AllRoutes;
