import React from "react";
import { Players } from "./Players";
import { RaffleActions } from "./RaffleActions";
import { RaffleDetail } from "@/components/RaffleDetail";
import { RaffleDetails } from "./RaffleDetails";

const Raffle = () => {
  return (
    <>
      <RaffleDetails />
      <div className="w-screen grid grid-cols-2 gap-4 p-4 ">
        <Players />
        <RaffleActions />
      </div>
    </>
  );
};

export default Raffle;
