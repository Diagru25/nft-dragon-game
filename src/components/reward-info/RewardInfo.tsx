import { SYMBOL } from "@/constants/nft.constant";
import React from "react";
import { useAccount } from "wagmi";

const RewardInfo = () => {
  const { isConnected } = useAccount();

  const poliragonProfit = 18;
  const referralReward = 18;

  if (typeof window !== "undefined")
    return isConnected ? (
      <div className="flex items-center justify-start divide-x sm:justify-center divide-caption-label text-s">
        <p className="pr-2">
          <span className="font-semibold text-caption-label text-s">
            Polyragon Profit:{" "}
          </span>
          {poliragonProfit} {SYMBOL.DIAMOND}
        </p>
        <p className="px-2">
          <span className="font-semibold text-caption-label text-s">
            Referral Reward:{" "}
          </span>
          {referralReward} {SYMBOL.DIAMOND}
        </p>
      </div>
    ) : (
      <div></div>
    );
  else return <div></div>;
};

export default RewardInfo;
