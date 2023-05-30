"use client";

import React, { useEffect, useState } from "react";
import { useMoralis, useWeb3Contract } from "react-moralis";
import { raffle_abi } from "../../../constants";
import { RaffleDetail } from "@/components/RaffleDetail";
import { SiEthereum } from "react-icons/si";
import { HiUsers } from "react-icons/hi";
import { ethers } from "ethers";

type RaffeDetailProps = {
  raffleAddress: string | undefined;
  entranceFee: string;
};

export const RaffleDetails = ({
  raffleAddress,
  entranceFee,
}: RaffeDetailProps) => {
  const [numberOfPlayers, setNumberOfPlayers] = useState<string>("0");
  const { isWeb3Enabled } = useMoralis();

  const {
    runContractFunction: joinRaffle,
    data: joinRaffleTransaction,
    isFetching,
    isLoading,
  } = useWeb3Contract({
    abi: raffle_abi,
    contractAddress: raffleAddress,
    functionName: "joinRaffle",
  });

  const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
    abi: raffle_abi,
    contractAddress: raffleAddress,
    functionName: "getNumberOfPlayers",
  });

  useEffect(() => {
    if (!isWeb3Enabled) return;

    const loadRaffleStates = async () => {
      const raffleNumberOfPlayers = (await getNumberOfPlayers())?.toString();

      setNumberOfPlayers((raffleNumberOfPlayers as string) ?? "0");
    };

    loadRaffleStates();
  }, [isWeb3Enabled, getNumberOfPlayers]);

  return (
    <div className="flex justify-center gap-8 p-8">
      <RaffleDetail
        icon={<SiEthereum size={32} />}
        value={`${ethers.formatUnits(entranceFee, "ether")}`}
        text="Entrance Fee"
      />
      <RaffleDetail
        icon={<HiUsers size={32} />}
        value={`${numberOfPlayers}`}
        text="Players"
      />
    </div>
  );
};
