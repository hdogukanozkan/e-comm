import React from "react";
import Stars from "../../../../Components/ProductComponents/Stars";

const Product = ({ productName, imgURL, stars, price }) => {
  return (
    <div className="p-2 flex flex-col gap-2 border rounded-md">
      <img src={imgURL} alt={productName} />
      <h2 className="line-clamp-2">{productName}</h2>
      <Stars stars={stars} />
      <p className="font-bold text-center text-2xl text-mainColor">
        {price},00
      </p>
    </div>
  );
};

export default Product;
