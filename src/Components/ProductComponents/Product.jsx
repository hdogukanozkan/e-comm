import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import Stars from "./Stars";

const product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.imgURL} alt={product.name} />
      <div>
        <h3 className="title">{product.name}</h3>
        <Stars stars={product.stars} />
        <p className="price">{product.price},00 $</p>
      </div>
      <span className="w-10 absolute right-2 top-2 flex justify-center items-center rounded-full aspect-square bg-gray-100 border border-gray-300 text-black hover:text-mainColor transition-all cursor-pointer">
        <AiOutlineHeart size={25} />
      </span>
    </div>
  );
};

export default product;
