import { useState } from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import "./App.css";

function App() {
  return (
    <>
      <h1>Fluff n' Stuff</h1>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
