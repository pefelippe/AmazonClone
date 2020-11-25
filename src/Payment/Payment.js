import React from "react";
import { Link } from "react-router-dom";
import CheckoutProduct from "../CheckoutProduct";
import { useStateValue } from "../StateProvider";

import "./Payment.css";

function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* Payment Section - Delivery Adress */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>adressss</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React LANE</p>
            <p>Los Angeles</p>
          </div>
        </div>
        {/* Payment Section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review Items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/* Payment Section - Payment Method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">{/* Detalhes */}</div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
