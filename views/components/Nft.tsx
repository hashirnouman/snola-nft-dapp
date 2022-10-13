import Image from "next/image";
import React from "react";
import epic from "../../images/a3.png";
import normal from "../../images/a1.png";
import rare from "../../images/a2.png";
import legend from "../../images/a4.png";
import Card from "../../components/Card";
type Props = {};

const Nft = (props: Props) => {
  return (
    <div className="bg-[url('../images/overview.jpg')] bg-no-repeat bg-cover h-full w-screen p-10">
      <div className="text-center text-white font-extrabold text-6xl">NFTs</div>
      <div className="flex scale-75 justify-center space-x-10">
        <div>
          <Image src={normal} alt="normal" />
          <Card />
        </div>
        <div>
          <Image src={rare} alt="rare" />
          <Card />
        </div>
        <div>
          <Image src={epic} alt="epic" />
          <Card />
        </div>
        <div>
          <Image src={legend} alt="legend" />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Nft;
