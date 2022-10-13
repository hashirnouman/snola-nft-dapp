import React from "react";

type Props = {};

const Card = (props: Props) => {
  return (
    <div className=" font-bold bg-black bg-opacity-80 w-96 h-52 rounded-3xl text-white p-10 text-center">
      <div className="text-2xl">Enhancer</div>
      <div className="text-6xl">X4</div>
      <div className="text-xl">
        <p>6000-500</p>
        <p>None</p>
      </div>
    </div>
  );
};

export default Card;
