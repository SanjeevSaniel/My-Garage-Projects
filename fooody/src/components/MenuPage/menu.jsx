import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { RestaurantContext } from "./../../App";

import Button from "react-bootstrap/Button";

const Menu = () => {
  const restaurants = useContext(RestaurantContext);
  const { id } = useParams();

  return (
    <div style={{ margin: "auto", maxWidth: "1000px" }}>
      {restaurants
        .filter((restaurant) => restaurant._id === parseInt(id))
        .map((restaurant) => (
          <section key={id}>
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
              {restaurant.menu.map((m) => (
                <div>
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
                      {m.item_name} <br /> ₹{m.item_price}
                    </div>

                    <div>
                      <Button
                        style={{
                          width: "fit-content",
                          padding: "5px 10px",
                          fontSize: "14px",
                          // color: "green",
                        }}
                        variant={m.item_type === "veg" ? "success" : "danger"}
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
