import React, { useEffect } from "react";
import "./Cart.css";

function Cart(props) {
  return (
    <div>
      <div className="cart-container"></div>
      <div className="product-shoutout-container">
        <p className="product-shoutout">
          Looking for more? Check out the <a href="Products">Products</a> page!
        </p>
      </div>
    </div>
  );
}

export default Cart;
