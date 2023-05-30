"use client";

import React, { useEffect, useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { raffle_abi, raffle_addresses } from "../../../constants";
import { RaffleDetail } from "@/components/RaffleDetail";

import { ethers } from "ethers";
export const RaffleDetails = () => {
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
  const { runContractFunction: getNumber } = useWeb3Contract({
    abi: raffle_abi,
    contractAddress: raffleAddress,
    functionName: "get",
  });

  useEffect(() => {
    if (!isWeb3Enabled) return;

    const loadRaffleStates = async () => {
      const raffleEntranceFee = ((await getEntranceFee()) as any)?.toString();
      if (!raffleEntranceFee) return;
      setEntranceFee(raffleEntranceFee as string);
    };

    loadRaffleStates();
  }, [isWeb3Enabled, getEntranceFee]);

  return (
    <div className="flex justify-around">
      <RaffleDetail
        value={`${ethers.formatUnits(entranceFee, "ether")}`}
        text="Entrance Fee"
      />
    </div>
  );
};
