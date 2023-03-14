import React, { useContext, useEffect, useState } from "react";
import "./Menu.css";
import { useParams } from "react-router-dom";
import { CartContext, RestaurantContext } from "../../App";

import Button from "react-bootstrap/Button";

const Menu = () => {
  const { r_id } = useParams();
  const restaurants = useContext(RestaurantContext);
  const [visible, setVisible] = useState(false);

  const [cart, handleCart] = useContext(CartContext);

  const toggleView = () => {
    setVisible((c) => !c);
    setTimeout(() => {
      setVisible((c) => !c);
    }, 1000);
  };

  const addToCart = (item) => {
    let existingItem = cart.filter((c) => c.code === item.code);

    if (existingItem.length !== 0) {
      let result = existingItem.map((i) => (i.quantity += 1));
      console.log(result);
    } else {
      let updatedData = { ...item, quantity: 1 };
      handleCart((current) => [...current, updatedData]);
    }

    toggleView();
  };

  useEffect(() => {
    localStorage.setItem("food_cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div
      style={{
        margin: "auto",
        paddingTop: "2rem",
        maxWidth: "1000px",
        position: "relative",
      }}
    >
      {visible ? (
        <div className="add-to-cart-message">Item added to cart</div>
      ) : (
        ""
      )}

      {restaurants
        .filter((restaurant) => restaurant._id === parseInt(r_id))
        .map((restaurant) => (
          <section key={r_id}>
            <div
              style={{
                display: "grid",
                // justifyContent: "center",
                alignItems: "center",
                gridTemplateColumns: "auto auto",
                background: "#FFF9F1",
                maxWidth: "1000px",
              }}
            >
              <div style={{ margin: "auto" }}>
                <h2>{restaurant.name}</h2>
                <p>
                  {restaurant.categories} <br />
                  {restaurant.address}
                </p>
              </div>
              <div
                style={{
                  background: "grey",
                  width: "fit-content",
                  height: "fit-content",
                  color: "#ffffff",
                  padding: "5px",
                  margin: "auto",
                }}
              >
                <div>{restaurant.rating}</div>
              </div>
            </div>
            <div>
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "green",
                      width: "10px",
                      height: "10px",
                      marginRight: "10px",
                    }}
                  ></div>
                  <span>Veg</span>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      background: "red",
                      width: "10px",
                      height: "10px",
                      marginRight: "10px",
                    }}
                  ></div>
                  <span>Non-Veg</span>
                </div>
              </div>
              {restaurant.menu.map((m, index) => (
                <div key={index}>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "auto auto",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0 10rem",
                      margin: "16px",
                    }}
                  >
                    <div style={{ margin: "auto" }}>
                      {m.name} <br /> ₹{m.price}
                    </div>

                    <div>
                      <Button
                        style={{
                          width: "fit-content",
                          padding: "5px 10px",
                          fontSize: "14px",
                          // color: "green",
                        }}
                        variant={m.type === "veg" ? "success" : "danger"}
                        onClick={() => addToCart(m)}
                      >
                        ADD
                      </Button>
                    </div>
                  </div>
                  <hr style={{ margin: "auto", maxWidth: "650px" }} />
                </div>
              ))}
            </div>
          </section>
        ))}
    </div>
  );
};

export default Menu;
