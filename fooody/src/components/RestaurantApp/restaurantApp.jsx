import React from "react";

import Banner from "../../common/Banner/banner";
import NavbarComponent from "../../common/navbarComponent";
import ProductCard from "../../common/productCard/productCard";

const RestaurantApp = () => {
  const restaurantSelected = (restaurant) => {
    console.log(restaurant);
  };

  return (
    <div>
      <NavbarComponent />
      <Banner />
      <ProductCard onRestaurantSelect={restaurantSelected} />
    </div>
  );
};

export default RestaurantApp;
