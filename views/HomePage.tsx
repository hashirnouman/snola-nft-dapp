import Image from "next/image";
import React from "react";
import waves from "../images/shape.png";
import aboutplayer from "../images/about-player.png";
import Welcome from "./components/Welcome";
import Story from "./components/Story";
import Nft from "./components/Nft";
import RoadMap from "./components/RoadMap";
type Props = {};

const HomePage = (props: Props) => {
  return (
    <div className="overflow-hidden">
      <div className="bg-[url('../images/hero.jpg')] bg-cover bg-no-repeat h-screen w-screen ">
        <div className="space-y-5 flex flex-col justify-center translate-x-80 translate-y-64 ">
          <div className="text-pink text-3xl font-bold pl-10">
            Are you ready to be hyper hero
          </div>
          <div className="text-7xl text-white font-bold">IN YOUR HABBIT</div>
          <div className="text-7xl text-white font-bold">IS YOUR FUTURE</div>
          <p className="text-2xl text-white">
            As a community we give you the tools to achieve your goals
          </p>
        </div>
        <div className="z-10 translate-x-3/4 hover:translate-y-3 hover:transition-all">
          <Image src={aboutplayer} alt="player" />
        </div>
        {/* <div>
          <Image src={waves} alt="waves" />
        </div> */}
      </div>

      <Welcome />
      <Story />
      <Nft />
      <RoadMap />
    </div>
  );
};

export default HomePage;
