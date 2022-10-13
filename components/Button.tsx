import React from "react";

type Props = {};

const Button = (props: Props) => {
  return (
    <div className="bg-gradient-to-r from-garident_color to-pink w-64 text-white text-center text-xl p-2 rounded-2xl shadow-lg cursor-pointer shadow-garident_color hover:bg-blue-600 hover:-translate-y-3 transition-all duration-500">
      CONNECT WALLET
    </div>
  );
};

export default Button;
