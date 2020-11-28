import React from "react";

import { useStateValue } from "../../StateProvider";

import "./styles.css";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          <p>{"⭐".repeat(rating)}</p>
        </div>
      </div>
      <img src={image} alt="" className="src" />

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
