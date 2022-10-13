import Image from "next/image";
import React from "react";
import character1 from "../../images/game-el-2.png";
import character2 from "../../images/game-el-4.png";
type Props = {};

const Story = (props: Props) => {
  return (
    <div className="p-10">
      <div className="text-white text-5xl text-center fold-bold">Story</div>
      <div className="flex">
        <Image src={character1} alt="character" />
        <div className="bg-gradient-to-b from-purple-500 to-purple-900 w-full p-5 rounded-xl shadow-inner shadow-md shadow-purple-400">
          <p className="text-center space-x-5 text-white text-2xl leading-[3rem] pt-20  ">
            The climate change has finally arrived, the planet Earth is
            devastated and there seems to be no solution. Human beings in a
            relentless quest to change the future of their society, form a group
            of admirable people, called the “HyperHabits” with great physical
            and intellectual qualities, among others. The HiperHabits without
            losing their style, travel through the multiverse and its different
            times, seeking to change habits to improve the quality of life in
            the future that lies ahead
          </p>
          <p className="text-white text-3xl py-10 font-extrabold text-center">
            BOOST YOUR SKILLS, MATCH YOUR NFT...
          </p>
        </div>
        <Image src={character2} alt="character 2" />
      </div>
    </div>
  );
};

export default Story;
