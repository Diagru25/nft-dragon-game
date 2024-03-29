import {
  LOCAL_STORAGE_TYPE_DRAGON,
  TYPE_OF_DRAGON,
} from "@/constants/common.constant";
import { contractConfig } from "@/constants/nft.constant";
import { formatValueContract } from "@/helpers/string";
import { validAddress } from "@/helpers/validate";
import { useRouter } from "next/router";
import React, { FC, Fragment, useEffect } from "react";
import { toast } from "react-toastify";
import {
  UseContractWriteConfig,
  UsePrepareContractWriteConfig,
  useAccount,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";
import { useThemeContext } from "@/context/app";

const Feed: FC<{
  className: string;
  style?: object;
  chain: any;
}> = ({ className, style, chain }) => {
  const router = useRouter();
  const refToken: any = validAddress(router.query.ref);

  //@ts-ignore
  const { typeOfDragon, setTypeOfDragon } = useThemeContext();

  const { address, isConnected: isConnectedAccount } = useAccount();

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
      value: formatValueContract(typeOfDragon),
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

  useEffect(() => {
    if (isSuccess) {
      toast.success("feed success");
    }
  }, [isSuccess]);

  const handleOnClick = () => {
    if (isConnectedAccount && typeOfDragon) {
      handleFeed();
      close();
    }
  };

  const handleCheckBoxChange = (value: any) => {
    console.log(typeof value);
    setTypeOfDragon(value);
    localStorage.setItem(LOCAL_STORAGE_TYPE_DRAGON, value);
  };

  return (
    <Fragment>
      <button
        type="button"
        style={style}
        className={`${className} pulse-button  `}
        onClick={handleOnClick}
        disabled={isLoading ? true : false}
      >
        <span className="whitespace-pre-line">
          {isLoading ? "Loading..." : "Feed \nthe dragon"}
        </span>
      </button>

      <Fragment>
        <div className="flex flex-col gap-2 p-4">
          {/* <div>
            {TYPE_OF_DRAGON.map((item, idx) => (
              <input
                type="checkbox"
                key={idx}
                label={item.label}
                value={item.matic}
                checked={typeOfDragon === item.matic ? true : false}
                onChange={(e) => handleCheckBoxChange(e.target.value)}
              />
            ))}
          </div> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            disabled={isPrepareError ? true : false}
            type="button"
            onClick={handleOnClick}
            className="ml-auto"
          >
            Confirm
          </button>
        </div>
      </Fragment>
    </Fragment>
  );
};

export default Feed;
