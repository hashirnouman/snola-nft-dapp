import Image from "next/image";
import React from "react";
import first from "../../images/1.png";
import second from "../../images/2.png";
import third from "../../images/3.png";
import four from "../../images/4.png";
import five from "../../images/5.png";
import six from "../../images/6.png";
type Props = {};

const RoadMap = (props: Props) => {
  return (
    <div className="bg-dark_purple text-white font-semibold h-full">
      <div className="text-center text-4xl py-10">Road Map </div>
      <hr className="bg-light_purple border-none h-px w-3/5 mx-auto" />
      <div className="">
        <div className="">
          <div>
            <Image src={first} alt="icon" />
            Q2 - 2022 <br /> Oriented <br /> community
          </div>
        </div>
        <div>
          <Image src={second} alt="icon" />
          <div>
            Q2 - 2022 <br /> Oriented <br /> community
          </div>
        </div>
        <div>
          <Image src={third} alt="icon" />
          <div className="text-center">
            Q2 - 2022 <br /> Oriented <br /> community
          </div>
        </div>
        <div>
          <Image src={four} alt="icon" />
          <div className="text-center">
            Q2 - 2022 <br /> Oriented <br /> community
          </div>
        </div>
        <div>
          <Image src={five} alt="icon" />
          <div className="text-center">
            Q2 - 2022 <br /> Oriented <br /> community
          </div>
        </div>
        <div>
          <Image src={six} alt="icon" />
          <div className="text-center">
            Q2 - 2022 <br /> Oriented <br /> community
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadMap;
