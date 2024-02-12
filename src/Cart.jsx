import React, { useState, useEffect } from "react";
import "./Cart.css";

function Cart(props) {
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  //Calculate total price
  useEffect(() => {
    console.log(props.purchases);
    setTotal(quantity * props.purchases[0].price);
  });
  return (
    <div>
      <div className="cart-container">
        <table className="cart-body">
          <tbody>
            <tr>
              <th className="cart-header">Product Name</th>
              <th className="cart-header">Price</th>
              <th className="cart-header">Animal Category</th>
              <th className="cart-header">Quantity</th>
              <th className="cart-header"></th>
              <th className="cart-header"></th>
            </tr>
          </tbody>
        </table>
        {props.purchases.map((product) => {
          return (
            <tr>
              <td className="cart-item">{product.name}</td>
              <td className="cart-item">{product.price}</td>
              <td className="cart-item">{product.animal_category}</td>
              <td className="cart-item">{quantity}</td>
              <td className="quantity-button">
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm"
                  onClick={(event) => {
                    setQuantity(quantity + 1);
                  }}
                >
                  +
                </button>
              </td>
              <td className="quantity-button">
                <button
                  type="button"
                  class="btn btn-outline-dark btn-sm"
                  onClick={(event) => {
                    if (quantity !== 0) {
                      setQuantity(quantity - 1);
                    }
                  }}
                >
                  -
                </button>
              </td>
            </tr>
          );
        })}
      </div>
      <div className="cart-total">Cart Total: {total}</div>
      <div className="product-shoutout-container">
        <p className="product-shoutout">
          Looking for more? Check out the <a href="Products">Products</a> page!
        </p>
      </div>
    </div>
  );
}

export default Cart;
