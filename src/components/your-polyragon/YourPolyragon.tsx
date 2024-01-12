/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from "react";
import EmptyIcon from "../icon/Empty";
import { SYMBOL, contractConfig } from "@/constants/nft.constant";
import { TYPE_DRAGON } from "@/assets/images";
import Image from "next/image";
import {
  UseContractReadConfig,
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { toast } from "react-toastify";
import { useThemeContext } from "@/context/app";

const NoData = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <EmptyIcon className="w-20 h-20" />
      <p>Buy at least one Polyragon to increase your asset</p>
    </div>
  );
};

const ClaimTotalReward: FC<{ refetch: any }> = ({ refetch }) => {
  const { chain } = useNetwork();
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
      refetch();
    }
  }, [isSuccessClaim]);

  return (
    <div className="flex justify-end w-full">
      {isLoadingClaim ? (
        <button
          type="button"
          className="w-full px-4 py-2 transition-all duration-300 ease-in-out border-none rounded-xl bg-call-to-action hover:scale-95 focus:outline-none disabled:transition-none disabled:scale-100 disabled:bg-background disabled:text-celeste disabled:cursor-not-allowed"
          disabled={true}
        >
          Loading...
        </button>
      ) : (
        <button
          onClick={claimReward}
          type="button"
          className="px-4 py-3 transition-all duration-300 ease-in-out border-none flex-2 rounded-xl bg-call-to-action w-fit hover:scale-95 focus:outline-none disabled:transition-none disabled:scale-100 disabled:bg-background disabled:text-celeste disabled:cursor-not-allowed text-[18px] float-right sm:w-full"
        >
          Claim All
        </button>
      )}
    </div>
  );
};

const YourPolyragon = () => {
  const data = [
    {
      key: 1,
      quantity: 0,
      profit: 0,
      unclaim: 0,
      name: "Bronze Polyragon",
      imgSrc: TYPE_DRAGON.BRONZE,
    },
    {
      key: 2,
      quantity: 0,
      profit: 0,
      unclaim: 0,
      name: "Silver Polyragon",
      imgSrc: TYPE_DRAGON.SILVER,
    },
    {
      key: 3,
      quantity: 0,
      profit: 0,
      unclaim: 0,
      name: "Gold Polyragon",
      imgSrc: TYPE_DRAGON.GOLD,
    },
    {
      key: 4,
      quantity: 0,
      profit: 0,
      unclaim: 0,
      name: "Diamond Polyragon",
      imgSrc: TYPE_DRAGON.DIAMOND,
    },
    {
      key: 5,
      quantity: 0,
      profit: 0,
      unclaim: 0,
      name: "Ruby Polyragon",
      imgSrc: TYPE_DRAGON.RUBY,
    },
  ];

  const { address, isConnected } = useAccount();

  const [polyragons, setPolyragons] = useState<any>(data);

  //@ts-ignore
  const { nofBuyPolyragon } = useThemeContext();

  const { refetch } = useContractRead({
    ...contractConfig,
    functionName: "getDragonsOfPlayer",
    args: [address],
    onSuccess(data: any) {
      //0: quantity
      //1: unclaim
      //2: profit
      const tmp = [...polyragons];

      for (let i = 0; i < data.length; i += 3) {
        const index = i / 3;
        tmp[index] = {
          ...tmp[index],
          quantity: Number(data?.[i]),
          unclaim: Number(data?.[i + 1]),
          profit: Number(data?.[i + 2]),
        };
      }

      setPolyragons(tmp);
    },
    onError(err) {
      console.log("Get your polyragon failed: ", err);
    },
  } as UseContractReadConfig);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isConnected) refetch();
      else return;
    }, 5000);

    return () => clearInterval(interval);
  }, [refetch, isConnected, nofBuyPolyragon]);

  if (polyragons.filter((el: any) => el.quantity).length === 0)
    return <NoData />;

  return (
    <div className="flex flex-col items-center gap-4 mt-10 ">
      <div className="flex items-center justify-between w-full px-5 py-3 border text-caption-label border-background-secondary rounded-2xl font-space-mono">
        <p style={{ flex: 2 }} className="sm:flex-3">
          Polyragon
        </p>
        <p className="flex-1 text-center sm:text-right">Profit</p>
        <p className="flex-1 text-center sm:text-right">Unclaim</p>
      </div>

      {polyragons
        .filter((el: any) => el.quantity)
        .map((item: any) => (
          <div
            key={item.key}
            className="flex items-center w-full px-5 py-3 bg-background-secondary rounded-2xl font-space-mono"
          >
            <p
              style={{ flex: 2 }}
              className="flex items-center gap-2 transition-all duration-300 ease-in-out cursor-pointer flex-2 sm:flex-3 hover:scale-95"
            >
              <Image
                src={item.imgSrc}
                alt={item.name}
                width={60}
                height={60}
                className="w-10 h-10 rounded-full"
              />
              <span className="font-semibold capitalize text-l sm:text-s">
                {item.name} ({item.quantity})
              </span>
            </p>
            <p className="flex-1 text-base text-center sm:text-right">
              {item.profit} {SYMBOL.DIAMOND}
            </p>
            <p className="flex-1 text-base text-center sm:text-right">
              {item.unclaim} {SYMBOL.DIAMOND}
            </p>
          </div>
        ))}
      <ClaimTotalReward refetch={refetch} />
    </div>
  );
};

export default YourPolyragon;
