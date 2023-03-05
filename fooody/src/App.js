import { createContext, useEffect, useState } from "react";
import "./App.css";

import NavbarComponent from "./common/navbarComponent";

import { Route, Routes } from "react-router-dom";
import Menu from "./components/MenuPage/menu";

import RestaurantApp from "./components/RestaurantApp/restaurantApp";

export const RestaurantContext = createContext();

function App() {
  const data = require("./api/Restaurants.json");
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    setRestaurants(data);
  }, [restaurants, data]);

  return (
    <div className="App">
      <NavbarComponent />
      <RestaurantContext.Provider value={restaurants}>
        {/* <RestaurantApp /> */}

        <Routes>
          <Route path="/:id" element={<Menu />} />
          <Route path="/" element={<RestaurantApp />} />
        </Routes>
      </RestaurantContext.Provider>
    </div>
  );
}

export default App;
