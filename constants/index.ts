import abi from "./abi.json";
import contractAddresses from "./addresses.json";

type ContractAddresses = { [key: string]: string[] };

export const raffle_abi = abi;
export const raffle_addresses: ContractAddresses = contractAddresses;
