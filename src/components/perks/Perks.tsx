import Card from "../common/Card";
import Section from "../common/Section";

export default function PerksSection() {
  const perks: Array<{ title: string; description: string }> = [
    {
      title: "OwnerShip",
      description: `By owning one of our 40000 AiChick OG Collection, you automatically become an early member of #AiChick Community.
      \nAll NFT holders are eligible for our upcoming airdrop and future events. Hurry up before sold out.`,
    },

    {
      title: "100% Community Owned",
      description: `#AiChick is built different that is why we are allocating 100% of our tokens to the community to decide the value of the project.
    \nNOTE: NO TOKEN IS ALLOCATED TO TEAM`,
    },

    {
      title: "Locked Liquidity",
      description: `The hallmark of every great project is transparency and fairness. Inorder to ensure the safety of our investors, we will lock liquidity to boost investors confidence and ensure we continue building long term.`,
    },

    {
      title: "Earn rewards for holding #AiChick token",
      description: `#ARB rewards will be distributed to top 500 holders weekly as a way to earn passive income.`,
    },
  ];
  return (
    <section id="perks" className="w-full bg-primary-light py-10 px-5">
      <div className="flex flex-col items-center container mx-auto">
        <Section title="Perk">
          <div className="grid sm:grid-rows-1 sm:grid-cols-1 grid-rows-2 grid-cols-2 gap-4">
            {perks.map((perk, index) => (
              <Card
                key={index}
                title={perk.title}
                description={perk.description}
              ></Card>
            ))}
          </div>
        </Section>
      </div>
    </section>
  );
}
