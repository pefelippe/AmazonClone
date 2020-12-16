import React from "react";

import Product from "../../Components/Product";

import "./styles.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/32/kindle/devices/2020/Alexa/GW/Dezembro/W51/1500x600_cinza_2._CB413154209_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1222"
            title="The lean startup"
            price={29.59}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
          <Product
            id="131311113"
            title="The lean startup"
            price={29.59}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
          <Product
            id="111"
            title="The lean startup"
            price={29.59}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="131313"
            title="The lean startup"
            price={29.59}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
          <Product
            id="3333"
            title="The lean startup"
            price={29.59}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="1313"
            title="The lean startup"
            price={29.59}
            image={
              "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            }
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
