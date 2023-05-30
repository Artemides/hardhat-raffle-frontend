import React from "react";
import { Players } from "./Players";
import { RaffleActions } from "./RaffleActions";

const Raffle = () => {
  return (
    <div className="w-screen grid grid-cols-2 gap-4 p-4 ">
      <Players />
      <RaffleActions />
    </div>
  );
};

export default Raffle;
