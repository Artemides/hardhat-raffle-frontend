import Image from "next/image";
import React, { ReactNode } from "react";
import Ether from "../../public/images/eth.png";
type RaffleDetailProps = {
  text: string;
  value: string;
  icon: ReactNode;
};
export const RaffleDetail = ({ text, value, icon }: RaffleDetailProps) => {
  return (
    <div className="flex flex-row items-center gap-x-2">
      {icon}
      <div>
        <h3 className="font-semibold text-4xl text-white text-center">
          {value}
        </h3>
        <span className="font-bold text-sm text-gray-300 ">{text}</span>
      </div>
    </div>
  );
};
