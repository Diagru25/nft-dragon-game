import { Montserrat } from "next/font/google";
import Banner from "@/components/banner/Banner";
import FormSection from "@/components/form-section/FormSection";
import PerksSection from "@/components/perks/Perks";
import TokenomicsSection from "@/components/tokenomics/Tokenomics";
import Exchange from "@/components/exchange/Exchange";
import TaxBurnChart from "@/components/tax-burn-chart/TaxBurnChart";
import Head from "next/head";
import ButtonConnectWallet from "@/components/button-connect-wallet/ButtonConnectWallet";
import RewardForm from "@/components/reward-form/RewardForm";
import Nutritional from "@/components/nutritional/Nutritional";
import ReferralLink from "@/components/referral-link/ReferralLink";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: "variable",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>AI Chicken ($AiChick)</title>
        <meta name="description" content="AI Chicken ($AiChick) NFT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${montserrat.className} my-16 `}>
        <section
          className="max-w-2xl p-8 mx-auto rounded-2xl flex flex-col gap-4"
          style={{ backgroundColor: "#FBDCA3" }}
        >
          <div className="flex items-center justify-between">
            {/* TODO logo come here */}
            <ButtonConnectWallet />
          </div>
          <hr />

          <div className="flex flex-col gap-4">
            <span>
              <b>
                The First BNB reward pool with the richest daily return and
                lowest dev fee, daily income of up to 8%, and a referral bonus
                of up to 12%
              </b>
            </span>

            <p className="ml-6">
              <b>#1 - BUY COQ</b>: Start by using your BNB to purchase COQS.
              <br />
              <b>#2 - COMPOUND</b>: To maximize your earnings, click on the
              &quot;COMPOUND&quot; button. This action will automatically
              reinvest your rewards back into COQ.
              <br />
              <b>#3 - CLAIM REWARDS</b>: This will transfer your accumulated BNB
              rewards directly into your wallet
              <br />
            </p>

            <i>
              The key to maximizing your rewards lies in the quantity of COQS
              you hold and how frequently you compound them. The more COQs you
              accumulate and the more often you reinvest your rewards, the
              greater the potential for earning more rewards
            </i>
          </div>

          <RewardForm />
          <Nutritional />
          <ReferralLink />
        </section>
        {/* <Banner /> */}
        {/* <FormSection /> */}
        {/* <PerksSection />
        <TokenomicsSection />
        <TaxBurnChart /> */}
        {/* <RoadmapSection /> */}
        {/* <Exchange /> */}
      </main>
    </>
  );
}
