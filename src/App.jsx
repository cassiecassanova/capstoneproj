import { Route, Routes, Navigate, Link } from "react-router-dom";
import NavigationBar from "./components/Navigation-bar";
import Home from "./Home";
import Products from "./Products";
import Cart from "./Cart";
import Logo from "./assets/logo.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <img className="site-logo" src={Logo}></img>
      <h1 className="site-header">Fluff n Stuff</h1>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
