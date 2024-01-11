import React, { FC, Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { TYPE_OF_DRAGON } from "@/constants/common.constant";
import { SYMBOL } from "@/constants/nft.constant";
import { IDragon } from "@/models/IDragon.model";
import { useRouter } from "next/router";
import { validAddress } from "@/helpers/validate";
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
import { useWeb3Modal } from "@web3modal/react";
import { toast } from "react-toastify";
import { contractConfig } from "@/constants/nft.constant";
import { useThemeContext } from "@/context/app";

interface ICardProps {
  dragon: IDragon;
  refetch: any;
}

const Card: FC<ICardProps> = ({ dragon, refetch }) => {
  const router = useRouter();
  const refToken: any = validAddress(router.query.ref);

  const { open } = useWeb3Modal();
  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();

  const [number, setNumber] = useState<number>(0);
  const [total, setTotal] = useState(0);
  const [isConnectedAccount, setIsConnectedAccount] = useState(false);

  const [maticPrice, setMaticPrice] = useState<any>();

  //@ts-ignore
  const { setNofBuyPolyragon } = useThemeContext();

  const { refetch: refetchPrice } = useContractRead({
    ...contractConfig,
    functionName: "minDragonsPrice",
    // args: [address],
    onSuccess(data: any) {
      //0: tỷ giá USDT - MATIC
      //1: MATIC
      // console.log("hhhhh: ", Number(data[0] / Math.pow(10, 8)).toString());
      // console.log("hhhhh: ", Number(data[1] / Math.pow(10, 12)).toString());
      setMaticPrice(Number(data[1]));
    },
    onError(err) {
      console.log("minDragonsPrice", err);
    },
  } as UseContractReadConfig);

  useEffect(() => {
    const totalPrice = Number(number) * (dragon.price * 1.05);
    setTotal(totalPrice);
  }, [number, dragon.price]);

  useEffect(() => {
    setIsConnectedAccount(isConnected);
  }, [isConnected]);

  const handleChangeInput = (value: number | string, id: number) => {
    setNumber(Number(value));
    refetchPrice();
  };

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "buyDragon",
    args: [refToken || address, number],
    overrides: {
      //@ts-ignore
      value: (number * (dragon.price / 50) * maticPrice).toString(),
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
      toast.success(`Buy ${number} ${dragon.name} success`);
      setNumber(0);
      refetch();
      setNofBuyPolyragon(Math.random());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <div className="flex flex-col overflow-hidden bg-background-secondary rounded-2xl ">
      <Image
        src={dragon.imgSrc}
        alt="COMMON.IMAGE.POLYRAGON"
        priority
        className="transition-all duration-300 ease-in-out hover:scale-110"
      />

      <div className="px-4 py-5">
        <p className="font-semibold text-[20px]">{dragon.label}</p>
        <p className="mt-1 text-base leading-6">
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
              Limited: <span className="text-white">{dragon.max}</span>
            </p>

            <p className="text-caption-label text-s">
              Left: <span className="text-white">{dragon.available}</span>
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
        {isLoading ? (
          <button
            type="button"
            className="w-full px-4 py-2 transition-all duration-300 ease-in-out border-none rounded-xl bg-call-to-action hover:scale-95 focus:outline-none disabled:transition-none disabled:scale-100 disabled:bg-background disabled:text-celeste disabled:cursor-not-allowed"
            disabled={true}
          >
            Loading...
          </button>
        ) : (
          <button
            type="button"
            className="w-full px-4 py-2 transition-all duration-300 ease-in-out border-none rounded-xl bg-call-to-action hover:scale-95 focus:outline-none disabled:transition-none disabled:scale-100 disabled:bg-background disabled:text-celeste disabled:cursor-not-allowed"
            onClick={() => (isConnectedAccount ? handleBuy() : open())}
            disabled={isConnectedAccount && number === 0}
          >
            {isConnectedAccount
              ? `Buy (${
                  number
                    ? (
                        (number * (dragon.price / 50) * maticPrice) /
                        1e12
                      ).toFixed(2)
                    : 0
                } MATIC)`
              : "Connect Wallet"}
          </button>
        )}
      </div>
    </div>
  );
};

const DragonCategory = () => {
  const [polyragons, setPolyragons] = useState(TYPE_OF_DRAGON);

  const { refetch } = useContractRead({
    ...contractConfig,
    functionName: "availDragons",
    onSuccess(data: any) {
      setPolyragons((prev) => {
        const tmp = [...prev];
        for (let i = 0; i < tmp.length; i++) {
          tmp[i].available = Number(data?.[i]);
        }
        return tmp;
      });
    },
  } as UseContractReadConfig);

  return (
    <Fragment>
      <div className="grid grid-cols-5 gap-5 md:grid-cols-3 sm:grid-cols-1 sm:gap-4">
        {polyragons.map((item) => (
          <Card key={item.value} dragon={item} refetch={refetch}></Card>
        ))}
      </div>
    </Fragment>
  );
};

export default DragonCategory;
