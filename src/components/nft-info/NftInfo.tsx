import { SYMBOL } from "@/constants/nft.constant";
import React, { useEffect, useState } from "react";
import { useAccount } from "wagmi";

const NftInfo = () => {
  const { isConnected } = useAccount();
  const [price, setPrice] = useState(0.8368);

  const poliragonProfit = 18;
  const referralReward = 18;

  useEffect(() => {
    const min = Math.ceil(8300);
    const max = Math.ceil(8500);
    const timer = setTimeout(
      () => setPrice(Math.floor(Math.random() * (max - min) + min) / 10000),
      1500
    );

    return () => clearTimeout(timer);
  });

  if (typeof window !== "undefined")
    return isConnected ? (
      <div className="flex items-center justify-start divide-x sm:justify-center divide-caption-label text-s">
        <p className="pr-2">
          <span className="font-semibold text-caption-label text-s">
            Polyragon Profit:
          </span>
          {poliragonProfit} {SYMBOL.DIAMOND}
        </p>
        <p className="px-2">
          <span className="font-semibold text-caption-label text-s">
            Referral Reward:
          </span>
          {referralReward} {SYMBOL.DIAMOND}
        </p>
        <p className="px-2">1{SYMBOL.DIAMOND} = 1 USDT</p>
        <p className="pl-2">
          MATICUSDT = <b>{price}</b> USDT
        </p>
      </div>
    ) : (
      <div></div>
    );
  else return <div></div>;
};

export default NftInfo;
