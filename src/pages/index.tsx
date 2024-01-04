import Earn from "@/components/earn/Earn";
import Feed from "@/components/feed/Feed";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { nftABI } from "@/constants/abi";
import { validAddress } from "@/helpers/validate";
import { useRouter } from "next/router";
import {
  UseContractReadConfig,
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  useAccount,
  useContractRead,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useSwitchNetwork,
  useWaitForTransaction,
} from "wagmi";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { Modal } from "@mantine/core";

const montserrat = Montserrat({
  subsets: ["latin", "vietnamese"],
  weight: "variable",
});

const contractConfig = {
  address: "0x681a0C3C84Bb8449D9EC389d9dE1957c87753Bb8",
  abi: nftABI,
};

export default function Home() {
  const router = useRouter();
  const refToken: any = validAddress(router.query.ref);

  const { switchNetwork } = useSwitchNetwork();

  useEffect(() => {
    switchNetwork?.(80001);
  }, [switchNetwork]);

  const [typeDragon, setTypeDragon] = useState("20000000000");

  const { chain } = useNetwork();
  const { address } = useAccount();

  const { refetch: refetchTVL } = useContractRead({
    ...contractConfig,
    functionName: "getBalance",
    onSuccess(data: any) {
      const tvl = data?.toString();
      console.log(tvl);
    },
  } as UseContractReadConfig);

  // const {
  //   data: dataEarnMatic,
  //   isError: errEarnMatic,
  //   error: errorEarnMatic,
  //   isSuccess: isHaveEarnMatic,
  // } = useContractRead({
  //   ...contractConfig,
  //   functionName: "calculateReward",
  //   args: [address],
  // } as UseContractReadConfig);

  // console.log(Number(dataEarnMatic[0]), Number(dataEarnMatic[0]));

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
    refetch,
  } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "buyDragon",
    args: [refToken || address],
    overrides: {
      //@ts-ignore
      value: typeDragon,
    },
  } as UsePrepareContractWriteConfig);

  const {
    data,
    error: feedError,
    isError: isFeedError,
    reset,
    write,
  } = useContractWrite(config as UseContractWriteConfig);

  const { isLoading, isSuccess, isError, error } = useWaitForTransaction({
    hash: data?.hash,
  });

  //claim
  const {
    config: configClaim,
    error: prepareClaimError,
    isError: isPrepareClaimError,
  } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "claimReward",
    // args: [refToken || address],
    // overrides: {
    //   //@ts-ignore
    //   value: "20000000000",
    // },
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

  const handleFeed = () => {
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

  const claimReward = () => {
    if (chain?.id !== 80001 && chain?.id !== 137) {
      return toast.error("Wrong chain! You must move to Arbitrum");
    }
    if (isPrepareClaimError) {
      //@ts-ignore
      return toast.error(
        //@ts-ignore
        prepareClaimError?.error?.data?.message || prepareClaimError?.message
      );
    }
    if (isClaimError) {
      //@ts-ignore
      return toast.error(
        //@ts-ignore
        claimError?.error?.data?.message || claimError?.message
      );
    }

    writeClaim?.();
  };

  useEffect(() => {
    if (isSuccess) {
      console.log("feed err");
      //@ts-ignore
      toast.success(
        //@ts-ignore
        "feed success"
      );
    }
  }, [isSuccess]);

  return (
    <>
      <Head>
        <title>Dragon NFT Game</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        style={{ height: "calc(100vh - 56px)" }}
        className={`${montserrat.className} relative`}
      >
        <div className="max-w-sm ml-auto">
          <Earn
            contractConfig={contractConfig}
            address={address}
            isFeedLoading={isLoading}
          />

          <Feed
            style={{ left: "37%", bottom: "22%" }}
            className="absolute"
            writeFnc={handleFeed}
            isFeedLoading={isLoading}
          />

          <button
            onClick={() => {
              setTypeDragon("50000000000");
              refetch();
            }}
            className="text-white"
          >
            Change type
          </button>
          <br />

          <button onClick={claimReward} className="text-white">
            claimReward
          </button>
        </div>
      </main>
    </>
  );
}
