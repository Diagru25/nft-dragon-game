import React from "react";
import EmptyIcon from "../icon/Empty";
import { SYMBOL } from "@/constants/nft.constant";
import { TYPE_DRAGON } from "@/assets/images";
import Image from "next/image";

const NoData = () => {
  return (
    <div className="flex flex-col items-center gap-4 mt-10">
      <EmptyIcon className="w-20 h-20" />
      <p>Buy at least one Polyragon to increase your asset</p>
    </div>
  );
};

const YourPolyragon = () => {
  const data = [
    { id: 1, profit: 10, name: "Bronze Dragon", imgSrc: TYPE_DRAGON.BRONZE },
    { id: 2, profit: 23, name: "Bronze Dragon", imgSrc: TYPE_DRAGON.BRONZE },
    { id: 3, profit: 0.5, name: "Silver Dragon", imgSrc: TYPE_DRAGON.SILVER },
    { id: 4, profit: 8, name: "Silver Dragon", imgSrc: TYPE_DRAGON.SILVER },
  ];

  if (data.length === 0) return <NoData />;

  return (
    <div className="flex flex-col items-center gap-4 mt-10 ">
      <div className="flex items-center justify-between w-full px-5 py-3 text-caption-label border border-background-secondary rounded-2xl font-space-mono">
        <p className="sm:flex-3 flex-1">#Polyragon</p>
        <p className="flex-1">Profit</p>
        <p className="flex-2">Action</p>
      </div>

      {data.map((item) => (
        <div
          key={item.id}
          className="flex items-center w-full px-5 py-3 bg-background-secondary rounded-2xl font-space-mono"
        >
          <p className="sm:flex-3 flex-1 flex items-center gap-2 cursor-pointer transition-all ease-in-out duration-300 hover:scale-95">
            <Image
              src={item.imgSrc}
              alt={item.name}
              width={60}
              height={60}
              className="rounded-full w-10 h-10"
            />
            <span className="text-l sm:text-s font-semibold capitalize">
              {item.name}
            </span>
          </p>
          <p className="flex-1 text-base">
            {item.profit} {SYMBOL.DIAMOND}
          </p>
          <button
            type="button"
            className="flex-2 border-none px-2 py-1 rounded-xl bg-call-to-action w-fit transition-all ease-in-out duration-300 hover:scale-95 focus:outline-none disabled:transition-none disabled:scale-100 disabled:bg-background disabled:text-celeste disabled:cursor-not-allowed"
          >
            Claim
          </button>
        </div>
      ))}
    </div>
  );
};

export default YourPolyragon;
