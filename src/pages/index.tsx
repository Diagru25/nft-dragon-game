import { Work_Sans } from "next/font/google";
import Head from "next/head";
import { useSwitchNetwork } from "wagmi";
import { useEffect } from "react";
import Hero from "@/components/hero/Hero";
import Section from "@/components/common/Section";
import DragonCategory from "@/components/dragon-category/DragonCategory";
import YourPolyragon from "@/components/your-polyragon/YourPolyragon";
import ReferralLink from "@/components/referral-link/ReferralLink";

const work_sans = Work_Sans({
  subsets: ["latin", "vietnamese"],
  weight: "variable",
});

export default function Home() {
  const { switchNetwork } = useSwitchNetwork();

  useEffect(() => {
    switchNetwork?.(80001);
  }, [switchNetwork]);

  return (
    <>
      <Head>
        <title>Polygon Network Reward Pool</title>
        <meta name="description" content="aaaaaaa" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Polygon Network Reward Pool" />
        <meta property="og:description" content="Polygon Network Reward Pool" />
        <meta property="og:image" content="opengraph-image.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${work_sans.className} relative`}>
        <div className="container mx-auto sm:px-4">
          <Hero />

          <Section title="#Step 1:" description="Buy at least one Polyragon">
            <DragonCategory />
          </Section>

          <Section
            title="#Step 2: Claim your profit"
            description=""
            className="mt-20"
          >
            <YourPolyragon />
          </Section>

          <ReferralLink />

          {/* <Earn chain={chain} address={address} />
          <Feed className="absolute feed-container" chain={chain} /> */}
        </div>
      </main>
    </>
  );
}
