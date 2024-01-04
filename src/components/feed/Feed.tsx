import { LOCAL_STORAGE_TYPE_DRAGON, TYPE_OF_DRAGON } from "@/constants/common";
import { contractConfig } from "@/constants/nft.constant";
import { formatValueContract } from "@/helpers/string";
import { validAddress } from "@/helpers/validate";
import { Button, Checkbox, Modal, Stack } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useRouter } from "next/router";
import React, { FC, Fragment, useEffect, useState } from "react";
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
  style: object;
  chain: any;
}> = ({ className, style, chain }) => {
  const router = useRouter();
  const refToken: any = validAddress(router.query.ref);
  const [opened, { open, close }] = useDisclosure(false);

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
    setTypeOfDragon(value);
    localStorage.setItem(LOCAL_STORAGE_TYPE_DRAGON, value);
  };

  return (
    <Fragment>
      <button
        type="button"
        style={style}
        className={`${className} h-10 outline-none text-neutral-200 bg-sky-600 rounded-lg border-none px-4 py-2 hover:bg-opacity-90`}
        onClick={open}
        disabled={isLoading ? true : false}
      >
        {isLoading ? "Loading..." : "Feed the dragon"}
      </button>

      <Modal opened={opened} onClose={close} title="Type of Dragon" centered>
        <div className="flex flex-col gap-2 p-4">
          <Stack>
            {TYPE_OF_DRAGON.map((item, idx) => (
              <Checkbox
                key={idx}
                label={item.label}
                value={item.matic}
                checked={typeOfDragon === item.matic ? true : false}
                onChange={(e) => handleCheckBoxChange(e.target.value)}
              />
            ))}
          </Stack>
        </div>
        <div className="flex items-center justify-between">
          <Button
            disabled={isPrepareError ? true : false}
            type="button"
            onClick={handleOnClick}
            className="ml-auto"
          >
            Confirm
          </Button>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Feed;
