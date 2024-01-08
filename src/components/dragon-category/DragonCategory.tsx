import React, { FC, Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { TYPE_OF_DRAGON } from "@/constants/common.constant";
import { SYMBOL } from "@/constants/nft.constant";
import { IDragon } from "@/models/IDragon.model";
import { useRouter } from "next/router";
import { validAddress } from "@/helpers/validate";
import {
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  useAccount,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useWeb3Modal } from "@web3modal/react";
import { toast } from "react-toastify";
import { contractConfig } from "@/constants/nft.constant";
import { formatValueContract } from "@/helpers/string";

interface ICardProps {
  dragon: IDragon;
}

const Card: FC<ICardProps> = ({ dragon }) => {
  const router = useRouter();
  const refToken: any = validAddress(router.query.ref);

  const { open } = useWeb3Modal();
  const { address, isConnected: isConnectedAccount } = useAccount();
  const { chain } = useNetwork();

  const [number, setNumber] = useState<number>(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = Number(number) * (dragon.price * 1.05);
    setTotal(totalPrice);
  }, [number, dragon.price]);

  const handleChangeInput = (value: number | string, id: number) => {
    setNumber(Number(value));
  };

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "buyDragon",
    args: [refToken || address],
    overrides: {
      //@ts-ignore
      value: formatValueContract(dragon.price.toString()),
    },
  } as UsePrepareContractWriteConfig);

  const {
    data,
    error: feedError,
    isError: isFeedError,
    write,
  } = useContractWrite(config as UseContractWriteConfig);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleBuy = () => {
    if (chain?.id !== 80001 && chain?.id !== 137) {
      return toast.error("Wrong chain! You must move to Arbitrum");
    }
    if (isPrepareError) {
      //@ts-ignore
      return toast.error(
        //@ts-ignore
        prepareError?.error?.data?.message || prepareError?.message
      );
    }
    // if (isFeedError) {
    //   console.log("feed err");
    //   //@ts-ignore
    //   return toast.error(feedError?.error?.data?.message || feedError?.message);
    // }

    write?.();
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("feed success");
    }
  }, [isSuccess]);

  return (
    <div className="flex flex-col overflow-hidden bg-background-secondary rounded-2xl ">
      <Image
        src={dragon.imgSrc}
        alt="COMMON.IMAGE.POLYRAGON"
        priority
        className="transition-all duration-300 ease-in-out hover:scale-110"
      />

      <div className="p-5">
        <p className="font-semibold leading-8 text-l">{dragon.label}</p>
        <p className="text-base leading-6">
          Earn up to {(dragon.price * dragon.dailyPercent) / 100}{" "}
          {SYMBOL.DIAMOND} daily.
        </p>

        <div className="flex flex-col gap-1 mt-4">
          <div className="flex items-center justify-between">
            <p className="text-caption-label text-s">Price</p>
            <p className="text-base">
              {dragon.price} {SYMBOL.DIAMOND}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-caption-label text-s">
              Limited: <span className="text-white">{5000}</span>
            </p>

            <p className="text-caption-label text-s">
              Left: <span className="text-white">{1000}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between my-1">
            <div className="flex justify-center w-full h-6 overflow-hidden rounded-lg">
              <button
                type="button"
                className="w-1/5 h-full border-none bg-celeste text-m text-call-to-action"
                onClick={() => setNumber(number - 1)}
                disabled={number === 0}
              >
                -
              </button>
              <input
                type="number"
                className="w-3/5 h-full border-none text-m text-caption-label"
                value={number}
                onChange={(e) =>
                  handleChangeInput(e.target.value, dragon.value)
                }
              />
              <button
                type="button"
                className="w-1/5 h-full border-none bg-celeste text-m text-call-to-action"
                onClick={() => setNumber(number + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-caption-label text-s">Total</p>
            <p className="text-base">
              {total} {SYMBOL.DIAMOND}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-caption-label text-s">Included: 5% fee</p>
          </div>
        </div>
      </div>

      <div className="flex w-full px-5 pb-5">
        <button
          type="button"
          className="w-full px-4 py-2 transition-all duration-300 ease-in-out border-none rounded-xl bg-call-to-action hover:scale-95 focus:outline-none disabled:transition-none disabled:scale-100 disabled:bg-background disabled:text-celeste disabled:cursor-not-allowed"
          onClick={() => (isConnectedAccount ? handleBuy() : open())}
          disabled={isConnectedAccount && number === 0}
        >
          {isConnectedAccount ? "Buy" : "Connect Wallet"}
        </button>
      </div>
    </div>
  );
};

const DragonCategory = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-5 gap-5 md:grid-cols-3 sm:grid-cols-1 sm:gap-4">
        {TYPE_OF_DRAGON.map((item) => (
          <Card key={item.value} dragon={item}></Card>
        ))}
      </div>
    </Fragment>
  );
};

export default DragonCategory;
