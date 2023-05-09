import { Montserrat } from "next/font/google";
import Banner from "@/components/banner/Banner";
import FormSection from "@/components/form-section/FormSection";
import PerksSection from "@/components/perks/Perks";
import TokenomicsSection from "@/components/tokenomics/Tokenomics";
import Exchange from "@/components/exchange/Exchange";
import TaxBurnChart from "@/components/tax-burn-chart/TaxBurnChart";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: "variable",
});

export default function Home() {
  return (
    <main className={`${montserrat.className} sm:mt-16`}>
      <section className="pb-10">
        <Banner />
        <FormSection />
      </section>
      <PerksSection />
      <TokenomicsSection />
      <TaxBurnChart />
      {/* <RoadmapSection /> */}
      <Exchange />
    </main>
  );
}
