import { Button } from "@/components/Button";
import React from "react";
import { useMoralis } from "react-moralis";

export const Navbar = () => {
  const { enableWeb3, account } = useMoralis();

  const handleWalletConnect = async () => {
    await enableWeb3();
  };
  return (
    <nav className=" w-screen bg-slate-900 flex px-16 py-4 justify-center">
      {" "}
      <Button handleClick={handleWalletConnect} text="Connect" />
    </nav>
  );
};
