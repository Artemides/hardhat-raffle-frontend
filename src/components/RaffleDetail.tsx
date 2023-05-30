import Image from "next/image";
import React from "react";
import Ether from "../../public/images/eth.png";
type RaffleDetailProps = {
  text: string;
  value: string;
};
export const RaffleDetail = ({ text, value }: RaffleDetailProps) => {
  return (
    <div className="flex flex-row items-center gap-x-2">
      <Image src={Ether} width={24} height={30} alt="ether" />
      <div>
        <h3 className="font-semibold text-4xl text-white text-center">
          {value}
        </h3>
        <span className="font-bold text-sm text-gray-300 ">{text}</span>
      </div>
    </div>
  );
};
