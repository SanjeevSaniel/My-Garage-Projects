import React from "react";

import Banner from "../../common/Banner/banner";
import ProductCard from "../../common/productCard/ProductCard";

const RestaurantApp = () => {
  const restaurantSelected = (restaurant) => {
    console.log(restaurant);
  };

  return (
    <div>
      <Banner />
      <ProductCard onRestaurantSelect={restaurantSelected} />
    </div>
  );
};

export default RestaurantApp;
