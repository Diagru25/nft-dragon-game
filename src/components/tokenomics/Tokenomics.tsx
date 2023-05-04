import { Fragment } from "react";
import Section from "../common/Section";

export default function Tokenomics() {
  return (
    <Fragment>
      <div
        id="tokenomics"
        className="p-10 flex flex-col items-center justify-center container mx-auto"
      >
        <Section title="Tokenomics">
          <section>
            <p>
              It possesses powerful deflationary attributes and offers users the
              opportunity to generate passive income via staking, thereby
              establishing enduring value for the token.
            </p>
            <h3 className="text-md my-5 font-bold">
              Total Supply : 100,000,000,000,000,000 tokens
            </h3>
            <h3 className="text-md my-5 font-bold">Token Symbol : $AICHICK</h3>
            <h3 className="text-md my-2 font-bold">Token Allocation :</h3>
            <h3 className="text-md my-2 font-bold">
              60% distributed as airdrop to AiChick OG NFT
            </h3>
            <h3 className="text-md my-2 font-bold">
              25% DEX Liquidity and CEX Listing
            </h3>
            <h3 className="text-md my-2 font-bold">15% for referral program</h3>
            <p>
              Tokens haven’t distributed via AiChick OG NFT and referral program
              will be burned forever
            </p>
          </section>
        </Section>
      </div>
    </Fragment>
  );
}
