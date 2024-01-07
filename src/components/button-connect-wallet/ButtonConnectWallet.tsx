import { useWeb3Modal } from "@web3modal/react";

export default function ButtonConnectWallet() {
  const { open } = useWeb3Modal();
  return (
    <>
      <button
        type="button"
        onClick={() => open()}
        className="transform transition-all hover:scale-95 hover:ease-in-out font-semibold text-base"
      >
        Connect Wallet
      </button>
    </>
  );
}
