/* eslint-disable react/prop-types */

export function ShowProducts(props) {
    return (
        <div>
          <h1>Product information</h1>
          <p>Name: {props.product.name}</p>
          <p>Price: {props.product.price}</p>
          <p>For: {props.product.animal_category}s!!</p>
          <p>Description: {props.product.description}</p>
          <p>Popularity: {props.product.popularity}</p>
        </div>
      );
}