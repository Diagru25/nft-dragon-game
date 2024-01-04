import useToggle from "@/hooks/useToggle";

import EyeCloseIcon from "../icon/EyeClose";
import EyeOpenIcon from "../icon/EyeOpen";
import { FC, useEffect, useState } from "react";
import {
  UseContractReadConfig,
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { contractConfig } from "@/constants/nft.constant";
import { toast } from "react-toastify";
import { numberWithCommas } from "@/helpers/string";

const Earn: FC<{ chain: any; address: any }> = ({ chain, address }) => {
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
    const interval = setInterval(() => refetch(), 1000);

    return () => clearInterval(interval);
  }, [refetch]);

  //claim
  const {
    config: configClaim,
    error: prepareClaimError,
    isError: isPrepareClaimError,
  } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "claimReward",
  } as UsePrepareContractWriteConfig);
  const {
    data: dataClaim,
    error: claimError,
    isError: isClaimError,
    write: writeClaim,
  } = useContractWrite(configClaim as UseContractWriteConfig);

  const { isLoading: isLoadingClaim, isSuccess: isSuccessClaim } =
    useWaitForTransaction({
      hash: dataClaim?.hash,
    });

  const claimReward = () => {
    if (chain?.id !== 80001 && chain?.id !== 137) {
      return toast.error("Wrong chain! You must move to Polygon");
    }
    if (isPrepareClaimError) {
      //@ts-ignore
      return toast.error(
        //@ts-ignore
        prepareClaimError?.error?.data?.message || prepareClaimError?.message
      );
    }

    writeClaim?.();
  };

  useEffect(() => {
    if (isSuccessClaim) {
      toast.success("Claim reward success!");
    }
  }, [isSuccessClaim]);

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
          {toggleEye ? MASK : numberWithCommas(earn.totalMatic)}&nbsp;
          <b>{MATIC}</b>
        </p>
      </div>

      <div className="flex items-center justify-between text-xs ">
        <p className="text-neutral-400">Total Matic By Ref</p>
        <p className="font-semibold text-neutral-200">
          {toggleEye ? MASK : numberWithCommas(earn.refMatic)}&nbsp;
          <b>{MATIC}</b>
        </p>
      </div>

      <div className="flex items-center justify-between text-xs ">
        <p className="text-neutral-400">Total Matic By Invest</p>
        <p className="font-semibold text-neutral-200">
          {toggleEye ? MASK : numberWithCommas(earn.investMatic)}&nbsp;
          <b>{MATIC}</b>
        </p>
      </div>

      <button
        onClick={claimReward}
        className={`h-10 outline-none text-neutral-200 bg-sky-600 rounded-lg border-none px-4 py-2 hover:bg-opacity-90`}
      >
        Claim Reward
      </button>
    </div>
  );
};

export default Earn;
