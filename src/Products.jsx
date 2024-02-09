import { useState, useEffect } from "react";
import catToy from "./assets/cat-toy.png";
import catTreats from "./assets/cat-treats.png";
import dogCollar from "./assets/dog-collar.png";
import "./Products.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "./Modal";
import {ShowProducts} from "./ShowProducts.jsx"

function Products() {
  // const [data, setData] = useState({})
  const [firstTen, setFirstTen] = useState([])
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/products')
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        const first_10 = res.products.slice(0,10);
        setFirstTen(first_10)
        // setData(res);
      });
  }, []);

  const handleShowProduct = (product) => {
    console.log("handleShowProduct", product);
    setIsProductsShowVisible(true);
    setCurrentProduct(product);
  };

  const handleClose = () => {
    console.log("handleClose");
    setIsProductsShowVisible(false);
  };

  return (
    <>
    <Modal show={isProductsShowVisible} onClose={handleClose}>
      <ShowProducts product={currentProduct}/>
    </Modal>
      {firstTen.map((product) => (
        <div key={product.id} className='container'>
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
                <button onClick={() => handleShowProduct(product)}>Show More</button>
              </div>
            </div>
        </div>
      ))}
    </>
  );
}


export default Products;
