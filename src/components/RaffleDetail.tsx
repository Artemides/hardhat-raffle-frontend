import React from "react";

type RaffleDetailProps = {
  text: string;
  value: string;
};
export const RaffleDetail = ({ text, value }: RaffleDetailProps) => {
  return (
    <div className="flex flex-col items-center">
      <h3 className="font-semibold text-4xl text-orange-500">{value}</h3>
      <span className="font-bold text-sm text-white">{text}</span>
    </div>
  );
};
