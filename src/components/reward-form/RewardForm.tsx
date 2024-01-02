import React from "react";

const RewardForm = () => {
  return (
    <div
      className="flex flex-col p-4 gap-4 border-2 border-yellow-950 rounded-2xl"
      style={{
        margin: "0 8%",
      }}
    >
      <div className="flex items-center justify-between border-b border-b-yellow-900">
        <p className="text-xl">TVL</p>
        <p className="text-2xl text-yellow-900 font-medium">0.00$</p>
      </div>

      <div className="flex items-center justify-between border-b border-b-yellow-900">
        <p className="text-xl">Contract</p>
        <p className="text-2xl text-yellow-900 font-medium">0 SOL</p>
      </div>

      <div className="flex items-center justify-between border-b border-b-yellow-900">
        <p className="text-xl">Wallet</p>
        <p className="text-2xl text-yellow-900 font-medium">0 SOL</p>
      </div>

      <div className="flex items-center justify-between border-b border-b-yellow-900">
        <p className="text-xl">Your GDTV</p>
        <p className="text-2xl text-yellow-900 font-medium">0.00 GDTV</p>
      </div>

      <div className="relative">
        <input
          type="number"
          min="0"
          max="0"
          style={{ padding: "12px 90px 12px 16px" }}
          className="text-2xl font-medium text-right border border-yellow-900 bg-white outline-none w-full"
          value="12"
        ></input>

        <p
          className="absolute m-0 text-2xl font-medium text-black"
          style={{ top: "14px", right: "18px" }}
        >
          SOL
        </p>
      </div>

      <button
        type="button"
        className="w-full p-4 bg-yellow-950 rounded-xl text-yellow-600"
      >
        BUY GDTV
      </button>

      <hr className="bg-black" />

      <div className="flex items-center justify-between">
        <p>Your Rewards</p>
        <p>0 SOL</p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <button
          type="button"
          className="w-full p-4 bg-yellow-950 rounded-xl text-yellow-600"
        >
          COMPOUND
        </button>

        <button
          type="button"
          className="w-full p-4 bg-yellow-950 rounded-xl text-yellow-600"
        >
          CLAIM REWARDS
        </button>
      </div>
    </div>
  );
};

export default RewardForm;
