import Image from "next/image";
import React from "react";
import Button from "../../components/Button";
import header from "../../images/header.png";
import styles from "./styles/Welcome.module.css";
import squares from "../../images/squares.png";
import charater from "../../images/el-4.png";
import platform from "../../images/about-phone.png";
import square2 from "../../images/about-obj-2.png";
type Props = {};

const Welcome = (props: Props) => {
  return (
    <div className="flex mt-10">
      <div className="bg-[url('../../images/about-obj-2.png)]">
        <div className="bg-[url('../images/about-phone.png')] bg-no-repeat bg-contain p-6 bg-right-bottom ">
          <div>
            <Image src={charater} alt="character" className="animate-bounce" />
          </div>
        </div>
      </div>
      <div className=" flex justify-end align-middle">
        <div className="flex flex-col justify-center items-center space-y-28">
          <div className="text-6xl text-white font-bold text-center">
            WELCOME
          </div>
          <div className="text-3xl text-pink text-center">
            JOIN US TO SAVE OUR PLANET AND HELP
            <br /> HUMANITY TO GROW AND WIN
          </div>
          <div className="space-y-8">
            <Button />
            <p className="text-3xl text-pink  ">NFT PRICE = $1000 DLLS</p>
          </div>
        </div>
        <Image src={squares} alt="square" layout="fixed" />
      </div>
    </div>
  );
};

export default Welcome;
