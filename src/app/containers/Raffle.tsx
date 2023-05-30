import React from "react";
import { Players } from "./Players";
import { RaffleActions } from "./RaffleActions";
import { RaffleDetail } from "@/components/RaffleDetail";
import { RaffleDetails } from "./RaffleDetails";
import { raffle_abi, raffle_addresses } from "../../../constants";
import { useMoralis } from "react-moralis";

const Raffle = () => {
  const { chainId, isWeb3Enabled } = useMoralis();

  const chainIdString = parseInt(chainId ?? "").toString();
  const raffleAddress =
    chainIdString in raffle_addresses
      ? raffle_addresses[chainIdString][0]
      : undefined;

    
  return (
    <>
      <RaffleDetails raffleAddress={raffleAddress} />
      <div className="w-screen grid grid-cols-2 gap-4 p-4 ">
        <Players />
        <RaffleActions />
      </div>
    </>
  );
};

export default Raffle;
