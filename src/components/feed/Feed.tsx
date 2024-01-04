import React, { FC } from "react";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";

const Feed: FC<{
  className: string;
  style: object;
  writeFnc: any;
  isFeedLoading: boolean;
  //handleChangeMintAmount: (value: number) => void;
}> = ({ className, style, writeFnc, isFeedLoading }) => {
  const { address, isConnected: isConnectedAccount } = useAccount();

  const handleOnClick = () => {
    if (isConnectedAccount) writeFnc();
    //toast.success("Feed success");
  };

  return isFeedLoading ? (
    <div>Loading</div>
  ) : (
    <button
      type="button"
      style={style}
      className={`${className} h-10 outline-none text-neutral-200 bg-sky-600 rounded-lg border-none px-4 py-2 hover:bg-opacity-90`}
      onClick={handleOnClick}
    >
      Feed the dragon
    </button>
  );
};

export default Feed;
