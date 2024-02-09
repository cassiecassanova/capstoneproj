import React, { useState, useEffect } from "react";
import catToy from "./assets/cat-toy.png";
import catTreats from "./assets/cat-treats.png";
import dogCollar from "./assets/dog-collar.png";
import "./Products.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Products() {
//create hooks to populate the cartItems list on the cart page
  const [purchase, setPurchase] = useState();
  const addedtoCartMsg = (
    <div>
      <h1>
        Item has been added to <a href="cart">Cart</a>!
      </h1>
    </div>
  );
  const addToCart = () => {};
  //need to auto-populate the cards with the product list
  return (
    <>
      <div className="card-product-container">
        <div className="card" style={{ width: "18rem" }}>
          <img src={catToy} className="card-product-img" />
          <div className="card-body">
            <h5 className="card-product-title">Cat Toy</h5>
            <p className="card-product-price">$0.00</p>
            <p className="card-product-description">Insert text here.</p>
            <a href="cart" className="card-product-cart-button">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={catTreats} className="card-product-img" />
          <div className="card-body">
            <h5 className="card-product-title">Cat Treats</h5>
            <p className="card-product-price">$0.00</p>
            <p className="card-product-description">Insert text here.</p>
            <a href="cart" className="card-product-cart-button">
              Add to Cart
            </a>
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <img src={dogCollar} className="card-product-img" />
          <div className="card-body">
            <h5 className="card-product-title">Dog Collar</h5>
            <p className="card-product-price">$0.00</p>
            <p className="card-product-description">Insert text here.</p>
            <a href="cart" className="card-product-cart-button">
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
