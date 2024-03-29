import { useState, useEffect } from "react";
import catToy from "./assets/cat-toy.png";
import catTreats from "./assets/cat-treats.png";
import dogCollar from "./assets/dog-collar.png";
import "./Products.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Products(props) {
  let imageArray = [catToy, catTreats, dogCollar];
  const [data, setData] = useState({});
  const [firstTen, setFirstTen] = useState([]);
  // const [loading, setLoading] = useState(true)
  // const [dataInfo, setDataInfo] = useState([])

  // const getData = async() => {
  //   const output = await fetch('http://localhost:3001/products')
  //   const response = await output.json()
  //   setData(response)
  //   {console.log(response)}

  //   function createDataObject(result){
  //     result.forEach(async () => {
  //       const info = await fetch(`http://localhost:3001/products`)
  //       const res = await info.json()
  //       setDataInfo(currentList => [...currentList, res])
  //       setLoading(false)
  //     })
  //   }
  //   createDataObject(response.products)
  //   await console.log(dataInfo)
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  // if (loading) {
  //   return(
  //     <div>
  //       This page is still loading
  //     </div>
  //   )
  // }
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        console.log(res);
        const first_10 = res.products.slice(0, 10);
        setFirstTen(first_10);
        setData(res);
      });
  }, []);

  // const first_10 = data.products.slice(0,10)
  return (
    <>
      {firstTen.map((product) => (
        <div key={product.id} className="container">
          <div className="card">
            <img src={catToy} className="card-product-img" />
            <div className="card-body">
              <h5 className="card-product-title">{product.name}</h5>
              <p className="card-product-price">$ {product.price}</p>
              <p className="card-product-description">
                Reviews: {product.description}
              </p>
              <p className="card-product-category">
                Category: {product.animal_category}
              </p>
              <button
                className="card-product-cart-button"
                onClick={(event) => {
                  props.setPurchases([...props.purchases, product]);
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Products;
