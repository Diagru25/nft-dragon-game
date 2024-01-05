import Earn from "@/components/earn/Earn";
import Feed from "@/components/feed/Feed";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { useEffect } from "react";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: "variable",
});

export default function Home() {
  const { switchNetwork } = useSwitchNetwork();

  useEffect(() => {
    switchNetwork?.(80001);
  }, [switchNetwork]);

  const { chain } = useNetwork();
  const { address } = useAccount();

  return (
    <>
      <Head>
        <title>Dragon NFT Game</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{ height: "calc(100vh - 56px)" }}
        className={`${montserrat.className} relative`}
      >
        <div className="max-w-sm ml-auto">
          <Earn chain={chain} address={address} />

          <Feed className="feed-container absolute" chain={chain} />
          <br />
        </div>
      </main>
    </>
  );
}
