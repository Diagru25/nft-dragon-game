import { contractConfig } from "@/constants/nft.constant";
import { numberWithCommas } from "@/helpers/string";
import React, { useEffect, useState } from "react";
import { UseContractReadConfig, useContractRead } from "wagmi";

const TVL = () => {
  const [tvl, setTVL] = useState("");

  const { refetch } = useContractRead({
    ...contractConfig,
    functionName: "getBalance",
    onSuccess: (data: any) => {
      const _data = data?.toString();
      setTVL(_data);
    },
  } as UseContractReadConfig);

  useEffect(() => {
    const interval = setInterval(() => refetch(), 1000);

    return () => clearInterval(interval);
  }, [refetch]);

  return (
    <div className="flex items-center justify-between text-xs sm:text-sm text-neutral-200">
      <p className="font-semibold">TVL:</p>&nbsp;
      <p className="font-semibold">{numberWithCommas(tvl)}</p>
    </div>
  );
};

export default TVL;
