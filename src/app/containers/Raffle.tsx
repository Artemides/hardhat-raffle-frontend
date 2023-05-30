"use client";

import React, { useEffect, useState } from "react";
import { Players } from "./Players";
import { RaffleActions } from "./RaffleActions";
import { RaffleDetails } from "./RaffleDetails";
import { raffle_abi, raffle_addresses } from "../../../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";

const Raffle = () => {
  const { chainId, isWeb3Enabled } = useMoralis();
  const [entranceFee, setEntranceFee] = useState<string>("0");

  const chainIdString = parseInt(chainId ?? "").toString();
  const raffleAddress =
    chainIdString in raffle_addresses
      ? raffle_addresses[chainIdString][0]
      : undefined;

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: raffle_abi,
    contractAddress: raffleAddress,
    functionName: "getEntranceFee",
  });
  useEffect(() => {
    if (!isWeb3Enabled) return;

    const loadRaffleStates = async () => {
      const raffleEntranceFee = (await getEntranceFee())?.toString();

      setEntranceFee((raffleEntranceFee as string) ?? "0");
    };

    loadRaffleStates();
  }, [isWeb3Enabled, getEntranceFee]);
  return (
    <>
      <RaffleDetails raffleAddress={raffleAddress} entranceFee={entranceFee} />
      <div className="w-screen grid grid-cols-2 gap-4 p-4 ">
        <Players />
        <RaffleActions
          raffleAddress={raffleAddress}
          entranceFee={entranceFee}
        />
      </div>
    </>
  );
};

export default Raffle;
