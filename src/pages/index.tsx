import Earn from "@/components/earn/Earn";
import Feed from "@/components/feed/Feed";
import { Montserrat } from "next/font/google";
import Head from "next/head";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: "variable",
});

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
