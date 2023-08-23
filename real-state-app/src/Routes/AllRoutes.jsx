import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../Pages/About";
import Home from "../Pages/Home";
import Property from "../Pages/Property";
import PropertyDetails from "../Components/PropertyDetails";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/property" element={<Property />} />
      <Route path="/property/:id/:title" element={<PropertyDetails />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AllRoutes;
