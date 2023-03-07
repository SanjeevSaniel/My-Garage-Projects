import { createContext, useEffect, useState } from "react";
import "./App.css";

import NavbarComponent from "./common/navbarComponent";

import { Route, Routes } from "react-router-dom";
import Menu from "./components/MenuPage/menu";

import RestaurantApp from "./components/RestaurantApp/restaurantApp";
import Cart from "./components/cart/cart";

export const RestaurantContext = createContext();
export const CartContext = createContext();
export const CartCountContext = createContext();

function App() {
  const data = require("./api/Restaurants.json");
  const [restaurants, setRestaurants] = useState([]);

  const [cart, setCart] = useState([]);
  // const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setRestaurants(data);
  }, [restaurants, data]);

  useEffect(() => {
    let result = JSON.parse(localStorage.getItem("food_cart"));
    if (result !== null) setCart(result);
  }, []);

  return (
    <div className="App">
      <CartContext.Provider value={[cart, setCart]}>
        <NavbarComponent />
        <RestaurantContext.Provider value={restaurants}>
          {/* <RestaurantApp /> */}

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
