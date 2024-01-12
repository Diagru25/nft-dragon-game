import { SYMBOL, contractConfig } from "@/constants/nft.constant";
import React, { useEffect, useState } from "react";
import { UseContractReadConfig, useAccount, useContractRead } from "wagmi";

const RewardInfo = () => {
  const { address, isConnected } = useAccount();
  const [reward, setReward] = useState({
    profit: 0,
    ref: 0,
    total: 0,
  });

  const { refetch } = useContractRead({
    ...contractConfig,
    functionName: "calculateReward",
    args: [address],
    onSuccess(data: any) {
      //0: profit
      //1: ref
      //2: total
      setReward({
        profit: Number(data?.[0]),
        ref: Number(data?.[1]),
        total: Number(data?.[2]),
      });
    },
    onError(err) {
      console.log("errrr: ", err);
    },
  } as UseContractReadConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isConnected) refetch();
      else return;
    }, 5000);

    return () => clearInterval(interval);
  }, [refetch, isConnected]);

  if (typeof window !== "undefined")
    return isConnected ? (
      <div className="flex items-center justify-start divide-x sm:justify-center divide-caption-label text-s">
        <p className="pr-2">
          <span className="font-semibold text-caption-label text-s">
            Polyragon Profit:{" "}
          </span>
          {reward.profit} {SYMBOL.DIAMOND}
        </p>
        <p className="px-2">
          <span className="font-semibold text-caption-label text-s">
            Referral Reward:{" "}
          </span>
          {reward.ref} {SYMBOL.DIAMOND}
        </p>
      </div>
    ) : (
      <div></div>
    );
  else return <div></div>;
};

export default RewardInfo;
