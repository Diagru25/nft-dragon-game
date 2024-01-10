import { Fragment } from "react";
import dynamic from "next/dynamic";

const NftInfo = dynamic(() => import("@/components/nft-info/NftInfo"), {
  ssr: true,
});
const RewardInfo = dynamic(
  () => import("@/components/reward-info/RewardInfo"),
  {
    ssr: false,
  }
);

const ButtonConnectWallet = dynamic(
  () => import("@/components/button-connect-wallet/ButtonConnectWallet"),
  { ssr: false }
);

function Header() {
  return (
    <Fragment>
      <section className="sticky top-0 left-0 z-50 items-center w-full py-4 bg-background sm:hidden ">
        <section className="container flex justify-between mx-auto items">
          <NftInfo />
          <div className="flex items-center gap-8">
            <RewardInfo />

            <ButtonConnectWallet />
          </div>
        </section>
      </section>

      {/* RESPONSIVE VERSION */}
      <div className="fixed top-0 left-0 z-50 hidden w-screen sm:block bg-background">
        <div className="flex flex-col justify-between w-full gap-4 px-5 py-4 ">
          <ButtonConnectWallet />
          <NftInfo />
        </div>
      </div>
    </Fragment>
  );
}

export default Header;
