import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars }) => {
  return (
    <p className="stars">
      {stars <= 1.2 ? (
        <>
          <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      ) : stars <= 1.8 ? (
        <>
          <BsStarFill /> <BsStarHalf />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      ) : stars <= 2.2 ? (
        <>
          <BsStarFill /> <BsStarFill />
          <BsStar />
          <BsStar />
          <BsStar />
        </>
      ) : stars <= 2.8 ? (
        <>
          <BsStarFill /> <BsStarFill />
          <BsStarHalf />
          <BsStar />
          <BsStar />
        </>
      ) : stars <= 3.2 ? (
        <>
          <BsStarFill /> <BsStarFill />
          <BsStarFill />
          <BsStar />
          <BsStar />
        </>
      ) : stars <= 3.8 ? (
        <>
          <BsStarFill /> <BsStarFill />
          <BsStarFill /> <BsStarHalf />
          <BsStar />
        </>
      ) : stars <= 4.2 ? (
        <>
          <BsStarFill /> <BsStarFill />
          <BsStarFill /> <BsStarFill />
          <BsStar />
        </>
      ) : stars <= 4.8 ? (
        <>
          <BsStarFill /> <BsStarFill />
          <BsStarFill /> <BsStarFill />
          <BsStarHalf />
        </>
      ) : stars <= 5 ? (
        <>
          <BsStarFill /> <BsStarFill />
          <BsStarFill /> <BsStarFill />
          <BsStarFill />
        </>
      ) : (
        "test"
      )}
      <span className="ml-2 text-sm text-gray-400">(785)</span>
    </p>
  );
};

export default Stars;
