import { useWeb3Modal } from "@web3modal/react";

export default function ButtonConnectWallet() {
  const { open } = useWeb3Modal();
  return (
    <>
      <button type="button" onClick={() => open()}>
        Connect wallet
      </button>
    </>
  );
}
