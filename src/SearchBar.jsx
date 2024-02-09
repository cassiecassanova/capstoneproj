/* eslint-disable react/prop-types */
import { useState } from "react"
import catToy from "./assets/cat-toy.png";
import "./Products.css";

// get some data from rails
// display that data to the user


export function SearchBar(props) {    
  const [searchTerm, setSearchTerm] = useState("")
  // console.log(props.products)
  return (
    <div id="products-index">
      {/* {searchTerm} */}
      <p>Search: <input type="text" value={searchTerm} onChange={(event) => {setSearchTerm(event.target.value)}} list="titles" /></p>
      <datalist id="titles">
        {props.products.map(product => (
          <option key={product.id}>{product.name}</option>
        ))}
        
      </datalist>
      {props.products.filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase())).map(product => (
        <div key={product.id} className="container">
            <div className="card" >
                <img src={catToy} className="card-product-img" />
                <div className="card-body">
                    <h5 className="card-product-title">{product.name}</h5>
                    <p className="card-product-price">$ {product.price}</p>
                    <p className="card-product-description">Reviews: {product.description}</p>
                    <p className="card-product-category">Category: {product.animal_category}</p>
                    <a href="cart" className="card-product-cart-button">
                    Add to Cart
                    </a>
                    <button onClick={() => {props.onShowProduct(product)}}>Show More</button>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}
