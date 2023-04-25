import RoadmapItem from "./RoadmapItem";

const roadmapData = [
  {
    title: "Phase 1: Pre-Launch",
    children: [
      "Conduct market research to determine the demand for a new memecoin project.",
      "Develop a comprehensive whitepaper that outlines the project’s goals, features, and roadmap",
      "Build a team of developers, marketers, and community managers to help execute the project.",
      "Launch website and social media channels to start building a community and generating buzz.",
    ],
  },
  {
    title: "Phase 2: Token Creation and Distribution",
    children: [
      "Launch the AiChicken OG NFT Collection.",
      "Launch the token on a decentralized exchange (DEX) platform, such as Uniswap or Camelot Dex.",
      "Set a total supply for the token and decide on an initial distribution strategy for airdrops and work with auditors to ensure the token’s code is secure and free from vulnerabilities.",
    ],
  },
  {
    title: "Phase 3: Initial Exchange Listing",
    children: [
      "Apply for AiChicken listing on major centralized exchanges (CEX) such as Mexc, Binance, Coinbase, or Kraken.",
      "Engage in marketing efforts to increase the token’s visibility and attract investors.",
      "Coingecko and CoinMarket listings.",
    ],
  },
  {
    title: "Phase 4: Community Building and Growth",
    children: [
      "Launch a community forum and engage with AiChicken Arb token holders to gather feedback and improve the project.",
      "Host events and promotions to incentivize people to hold and use the token, such as contests or giveaways.",
      "Build partnerships with other projects and influencers to expand AiChicken Arb’s reach.",
    ],
  },
  {
    title: "Phase 5: Project Expansion",
    children: [
      "Launch additional features, such as staking or yield farming, to provide additional benefits to AiChicken Arb token holders.",
      "Develop a mobile wallet or other tools to make it easier for people to use and hold the token.",
      "Explore opportunities to integrate AiChicken Arb into other blockchain ecosystems, such as DeFi protocols or NFT marketplaces.",
    ],
  },
  {
    title: "Phase 6: Long-Term Sustainability",
    children: [
      "Continue to build and engage with the AiChicken Arb community to ensure the project’s longevity.",
      "Explore options for governance and decentralization to make the project more community-driven and sustainable over the long term.",
      "Work with regulators and compliance experts to ensure that AiChicken Arb remains compliant with applicable laws and regulations.",
    ],
  },
];
export default function RoadmapSection() {
  return (
    <div>
      <div className="px-10 my-10 text-white">
        <h1 className="text-5xl my-9 font-bold text-white">Roadmap</h1>
        <div className="flex flex-col gap-5 text-white border-l-4 border-l-white pl-8">
          {roadmapData.map((item, index) => (
            <RoadmapItem
              key={index}
              title={item.title}
              contents={item.children}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
