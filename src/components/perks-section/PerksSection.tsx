import PerkItem from "./PerkItem";

export default function PerksSection() {
  return (
    <div>
      <div className="px-10 my-10 text-white">
        <h1 className="text-5xl my-9 font-bold text-white">Perks</h1>
        <div className=" flex bg-orange-600 text-white">
          <PerkItem title="OwnerShip">
            <p>
              By owning one of our 48000 AiShiba OG Collection, you
              automatically become an early member of AiShiba army.
            </p>
            <br />
            <p>
              All NFT holders are eligible for our upcoming airdrop and future
              events.
            </p>
            <a>Collection already sold out you can get from opensea</a>
          </PerkItem>
          <PerkItem title="100% Community-Owned">
            <p>
              AiShiba is built different that is why we are allocating 100% of
              our tokens to the community to decide the value of the project.
            </p>
            <br />
            <p>NOTE: NO TOKEN IS ALLOCATED TO TEAM</p>
            <br />
            <p>and it even gets better</p>
          </PerkItem>
          <PerkItem title="Locked Liquidity">
            <p>
              The hallmark of every great project is transparency and fairness.
              Inorder to ensure the safety of our investors, we will lock
              liquidity to boost investors confidence and ensure we continue
              building long term
            </p>
          </PerkItem>
          <PerkItem title="Earn Rewards for holding $SHIBAI Token">
            <p>
              Arb Rewards will be distributed to top 500 holders weekly as a way
              to earn passive income
            </p>
            <br />
            <p>You can also stake your NFT and SHIBAI to earn ARB token</p>
          </PerkItem>
        </div>
      </div>
    </div>
  );
}
