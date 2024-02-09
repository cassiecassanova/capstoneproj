import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import NavigationBar from "./components/Navigation-bar";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Logo from "./assets/logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [purchases, setPurchases] = useState([]);
  return (
    <>
      <img className="site-logo" src={Logo}></img>
      <h1 className="site-header">{`Fluff n' Stuff`}</h1>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products purchases={purchases} setPurchases={setPurchases} />
          }
        />
        <Route
          path="/cart"
          element={<Cart purchases={purchases} setPurchases={setPurchases} />}
        />
      </Routes>
    </>
  );
}

export default App;
