import { Button } from "@/components/Button";
import React, { useEffect } from "react";
import { useMoralis } from "react-moralis";

const NavbarTools = () => {
  const {
    enableWeb3,
    account,
    isWeb3Enabled,
    Moralis,
    deactivateWeb3,
    isWeb3EnableLoading,
  } = useMoralis();

  const handleWalletConnect = async () => {
    try {
      await enableWeb3();
      localStorage.setItem("connection", "injected");
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Moralis.onAccountChanged((account) => {
      if (account) return;

      localStorage.removeItem("connection");
      deactivateWeb3();
    });
  }, [Moralis, deactivateWeb3]);

  const diyplayRecortedAccount = (account: string) => {
    return (
      <span className="text-bold text-green-400">
        {`${account.slice(0, 6)}...${account.slice(-4)}`}
      </span>
    );
  };

  useEffect(() => {
    const autoConnect = async () => {
      if (localStorage.getItem("connect")) return;
      console.log("enabling account");
      await enableWeb3();
    };
    autoConnect();
  }, [isWeb3Enabled, enableWeb3]);

  return (
    <div className="flex align-middle">
      {account ? (
        diyplayRecortedAccount(account)
      ) : (
        <Button onClick={handleWalletConnect} disabled={isWeb3EnableLoading}>
          Connect
        </Button>
      )}
    </div>
  );
};

export default NavbarTools;
