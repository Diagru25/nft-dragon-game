import useToggle from "@/hooks/useToggle";

import EyeCloseIcon from "../icon/EyeClose";
import EyeOpenIcon from "../icon/EyeOpen";
import { FC } from "react";

const Earn = () => {
  const [toggleEye, setToggleEye] = useToggle(false);
  const MATIC = "MATIC";
  const MASK = "*****";

  const handleToggleEye = () => {
    setToggleEye(!toggleEye);
  };

  return (
    <div
      className="flex flex-col p-4 gap-4 rounded-2xl bg-zinc-900 bg-opacity-40"
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
            className="bg-transparent outline-none rounded-full p-2 hover:bg-white hover:bg-opacity-50"
          >
            <EyeCloseIcon />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleToggleEye}
            className="bg-transparent outline-none rounded-full p-2 hover:bg-white hover:bg-opacity-50"
          >
            <EyeOpenIcon />
          </button>
        )}
      </div>

      <div className="flex items-center justify-between text-xs ">
        <p className="text-neutral-400">Total Matic</p>
        <p className="text-neutral-200 font-semibold">
          {toggleEye ? MASK : "10,000,000"}&nbsp;
          <b>{MATIC}</b>
        </p>
      </div>

      <div className="flex items-center justify-between text-xs ">
        <p className="text-neutral-400">Total Matic By Ref</p>
        <p className="text-neutral-200 font-semibold">
          {toggleEye ? MASK : "2,998"}&nbsp;
          <b>{MATIC}</b>
        </p>
      </div>

      <div className="flex items-center justify-between text-xs ">
        <p className="text-neutral-400">Total Matic By Invest</p>
        <p className="text-neutral-200 font-semibold">
          {toggleEye ? MASK : "5,331"}&nbsp;
          <b>{MATIC}</b>
        </p>
      </div>
    </div>
  );
};

export default Earn;
