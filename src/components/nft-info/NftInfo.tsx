import { SYMBOL } from "@/constants/nft.constant";
import React, { useEffect, useState } from "react";

const NftInfo = () => {
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

  return (
    <div className="flex items-center justify-start divide-x divide-caption-label text-s">
      <p className="pr-2">
        <span className="text-caption-label text-s font-semibold">
          Polyragon Profit:
        </span>
        {poliragonProfit} {SYMBOL.DIAMOND}
      </p>

      <p className="px-2">
        <span className="text-caption-label text-s font-semibold">
          Referral Reward:
        </span>
        {referralReward} {SYMBOL.DIAMOND}
      </p>

      <p className="px-2">1{SYMBOL.DIAMOND} = 1 USDT</p>

      <p className="pl-2">
        MaticUSDT = <b>{price}</b> USDT
      </p>
    </div>
  );
};

export default NftInfo;
