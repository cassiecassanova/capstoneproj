import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal } from "./Modal";
import {ShowProducts} from "./ShowProducts.jsx"
import {SearchBar} from "./SearchBar.jsx"

function Products() {
  // const [data, setData] = useState({})
  const [firstTen, setFirstTen] = useState([])
  const [isProductsShowVisible, setIsProductsShowVisible] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        const first_10 = res.products.slice(0,10);
        setFirstTen(first_10)
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
      <SearchBar products={firstTen} onShowProduct={handleShowProduct}/>
      <Modal show={isProductsShowVisible} onClose={handleClose}>
        <ShowProducts product={currentProduct}/>
      </Modal>
    </>
  );
}

export default Products;
