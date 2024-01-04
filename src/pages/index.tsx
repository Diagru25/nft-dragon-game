import Earn from "@/components/earn/Earn";
import Feed from "@/components/feed/Feed";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { nftABI } from "@/constants/abi";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: "variable",
});

const contractConfig = {
  address: "0x11aA6868444C6b9dDE17B490281976251aF773f0",
  abi: nftABI,
};

export default function Home() {
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
          <Earn />
          <Feed style={{ left: "37%", bottom: "22%" }} className="absolute" />
        </div>
      </main>
    </>
  );
}
