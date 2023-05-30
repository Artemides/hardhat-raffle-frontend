import React from "react";
import { useWeb3Contract } from "react-moralis";
import { raffle_abi } from "../../../constants";

type RaffleActionsProps = {
  raffleAddress: string | undefined;
  entranceFee: string;
};
export const RaffleActions = ({
  raffleAddress,
  entranceFee,
}: RaffleActionsProps) => {
  const {
    runContractFunction: joinRaffle,
    data: joinRaffleTransaction,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: raffle_abi,
    contractAddress: raffleAddress,
    functionName: "joinRaffle",
    msgValue: entranceFee,
  });

  const handleJoinRaffle = async () => {
    await joinRaffle();
  };

  return (
    <section className=" bg-gray-900 rounded p-4">
      <h4 className="text-center font-bold">Actions</h4>
      <div className="grid place-items-center h-24">
        <button
          className="bg-orange-600 px-8 py-4 font-semibold text-2xl rounded hover:bg-orange-500 ease-out duration-300 disabled:bg-slate-500 disabled:cursor-wait "
          onClick={handleJoinRaffle}
          disabled={isFetching || isLoading}
        >
          Join
        </button>
      </div>
    </section>
  );
};
