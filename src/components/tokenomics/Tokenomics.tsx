import { Fragment } from 'react'
import Section from '../common/Section'

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
              SHIBAI is the fundamental token within the AiChicken ecosystem. It
              possesses powerful deflationary attributes and offers users the
              opportunity to generate passive income via staking, thereby
              establishing enduring value for the token.
            </p>
            <h3 className="text-md my-5 font-bold">
              Total Supply : 210,000,000,000,000,000 tokens
            </h3>
            <h3 className="text-md my-5 font-bold">Token Symbol : $SHIBAI</h3>
            <h3 className="text-md my-2 font-bold">Token Allocation :</h3>
            <h3 className="text-md my-2 font-bold">
              90% distributed as airdrop to eligible wallets
            </h3>
            <h3 className="text-md my-2 font-bold">
              10% DEX Liquidity and CEX Listing
            </h3>
            <p>
              Our tokenomics and airdrop eligibility criteria is fully explained
              in ourwhitepaper
            </p>
          </section>
        </Section>
      </div>
    </Fragment>
  );
}
