import useToggle from "@/hooks/useToggle";

import EyeCloseIcon from "../icon/EyeClose";
import EyeOpenIcon from "../icon/EyeOpen";
import { FC, useEffect, useState } from "react";
import { UseContractReadConfig, useContractRead } from "wagmi";

const Earn: FC<{ contractConfig: any; address: any; isFeedLoading: any }> = ({
  contractConfig,
  address,
  isFeedLoading,
}) => {
  const { refetch } = useContractRead({
    ...contractConfig,
    functionName: "calculateReward",
    args: [address],
    onSuccess(data: any) {
      //0: invest
      //1: ref
      //2: total
      setEarn({
        totalMatic: data[2]?.toString(),
        refMatic: data[1]?.toString(),
        investMatic: data[0]?.toString(),
      });
    },
  } as UseContractReadConfig);

  const [earn, setEarn] = useState({
    totalMatic: "0",
    refMatic: "0",
    investMatic: "0",
  });

  const [toggleEye, setToggleEye] = useToggle(false);
  const MATIC = "MATIC";
  const MASK = "*****";

  const handleToggleEye = () => {
    setToggleEye(!toggleEye);
  };

  useEffect(() => {
    refetch();
  }, [isFeedLoading, refetch]);

  return (
    <div
      className="flex flex-col gap-4 p-4 rounded-2xl bg-zinc-900 bg-opacity-40"
      style={{
        margin: "0 8%",
      }}
    >
      <div className="flex items-center justify-between text-neutral-200">
        <h5 className="text-2xl">Earn</h5>
        {toggleEye ? (
          <button
            type="button"
            onClick={handleToggleEye}
            className="p-2 bg-transparent rounded-full outline-none hover:bg-white hover:bg-opacity-50"
          >
            <EyeCloseIcon />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleToggleEye}
            className="p-2 bg-transparent rounded-full outline-none hover:bg-white hover:bg-opacity-50"
          >
            <EyeOpenIcon />
          </button>
        )}
      </div>

      <div className="flex items-center justify-between text-xs ">
        <p className="text-neutral-400">Total Matic</p>
        <p className="font-semibold text-neutral-200">
          {toggleEye ? MASK : earn.totalMatic}&nbsp;
          <b>{MATIC}</b>
        </p>
      </div>

      <div className="flex items-center justify-between text-xs ">
        <p className="text-neutral-400">Total Matic By Ref</p>
        <p className="font-semibold text-neutral-200">
          {toggleEye ? MASK : earn.refMatic}&nbsp;
          <b>{MATIC}</b>
        </p>
      </div>

      <div className="flex items-center justify-between text-xs ">
        <p className="text-neutral-400">Total Matic By Invest</p>
        <p className="font-semibold text-neutral-200">
          {toggleEye ? MASK : earn.investMatic}&nbsp;
          <b>{MATIC}</b>
        </p>
      </div>
    </div>
  );
};

export default Earn;
