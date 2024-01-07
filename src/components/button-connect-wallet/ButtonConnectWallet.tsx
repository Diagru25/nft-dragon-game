import { useWeb3Modal } from "@web3modal/react";
import { useAccount } from "wagmi";

export default function ButtonConnectWallet() {
  const { open } = useWeb3Modal();
  const { address } = useAccount();
  return (
    <>
      <button
        type="button"
        onClick={() => open()}
        className="p-2 text-base font-semibold transition-all transform border rounded-md hover:scale-95 hover:ease-in-out"
      >
        {address ? address : "Connect Wallet"}
      </button>
    </>
  );
}
