import { shortString } from "@/helpers/string";
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
        className="px-3 py-2 text-base font-semibold transition-all transform border-2 rounded-2xl border-call-to-action hover:scale-95 hover:ease-in-out"
      >
        {address ? shortString(address) : "Connect Wallet"}
      </button>
    </>
  );
}
