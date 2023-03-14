import { createContext, useEffect, useState } from "react";
import "./App.css";

import NavbarComponent from "./common/NavbarContainer";

import { Route, Routes } from "react-router-dom";
import Menu from "./components/MenuPage/Menu";

import RestaurantApp from "./components/RestaurantApp/RestaurantApp";
import Cart from "./components/cart/Cart";

export const RestaurantContext = createContext();
export const CartContext = createContext();
export const CartCountContext = createContext();

function App() {
  const restaurantsData = require("./api/Restaurants.json");
  const [restaurants, setRestaurants] = useState([]);

  const [cart, setCart] = useState([]);

  const handleCart = (value) => {
    setCart(value);
  };

  useEffect(() => {
    setRestaurants(restaurantsData);
  }, [restaurants, restaurantsData]);

  useEffect(() => {
    let result = JSON.parse(localStorage.getItem("food_cart"));
    if (result !== null) setCart(result);
  }, []);

  return (
    <div className="App">
      <CartContext.Provider value={[cart, handleCart]}>
        <NavbarComponent />
        <RestaurantContext.Provider value={restaurants}>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/restaurant/:r_id" element={<Menu />} />
            <Route path="/" element={<RestaurantApp />} />
          </Routes>
        </RestaurantContext.Provider>
      </CartContext.Provider>
    </div>
  );
}

export default App;
