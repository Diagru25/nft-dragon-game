import { Work_Sans } from "next/font/google";
import Head from "next/head";
import { useAccount, useNetwork, useSwitchNetwork } from "wagmi";
import { useEffect } from "react";
import Hero from "@/components/hero/Hero";
import Section from "@/components/common/Section";
import DragonCategory from "@/components/dragon-category/DragonCategory";
import YourPolyragon from "@/components/your-polyragon/YourPolyragon";
import ReferralLink from "@/components/referral-link/ReferralLink";
import NftInfo from "@/components/nft-info/NftInfo";

const work_sans = Work_Sans({
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
      <main className={`${work_sans.className} relative`}>
        <div className="container mx-auto sm:px-4">
          <Hero />

          <Section title="#Step 1:" description="Buy at least one Polyragon">
            <DragonCategory />
          </Section>

          <Section title="Your Polyragon" description="" className="mt-20">
            <YourPolyragon />
          </Section>

          <ReferralLink />

          {/* <Earn chain={chain} address={address} />
          <Feed className="feed-container absolute" chain={chain} /> */}
        </div>
      </main>
    </>
  );
}
