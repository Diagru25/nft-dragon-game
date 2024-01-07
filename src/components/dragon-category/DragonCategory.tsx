import React, { FC, Fragment, useEffect, useState } from "react";
import Image from "next/image";
import { TYPE_OF_DRAGON } from "@/constants/common.constant";
import { SYMBOL } from "@/constants/nft.constant";
import { IDragon } from "@/models/IDragon.model";

interface ICardProps {
  dragon: IDragon;
}

const Card: FC<ICardProps> = ({ dragon }) => {
  const rate = 0.8325;
  const [number, setNumber] = useState<number>(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = Number(number) * dragon.price * rate;
    setTotal(totalPrice);
  }, [number, dragon.price]);

  const handleChangeInput = (value: number | string, id: number) => {
    setNumber(Number(value));
  };

  const handleBuy = () => {};

  return (
    <div className="bg-background-secondary flex flex-col rounded-2xl overflow-hidden ">
      <Image
        src={dragon.imgSrc}
        alt="COMMON.IMAGE.POLYRAGON"
        priority
        className="transition-all duration-300 ease-in-out hover:scale-110"
      />

      <div className="p-5">
        <p className="text-l font-semibold leading-8">{dragon.label}</p>
        <p className="text-base leading-6">
          Earn up to {dragon.upTo} {SYMBOL.DIAMOND} daily.
        </p>

        <div className="flex flex-wrap items-center justify-between mt-4">
          <div className="w-20 h-6 rounded-lg overflow-hidden">
            <button
              type="button"
              className="border-none h-full bg-celeste text-m text-call-to-action w-6"
              onClick={() => setNumber(number - 1)}
              disabled={number === 0}
            >
              -
            </button>
            <input
              type="number"
              className="border-none h-full text-m text-caption-label w-2/5"
              value={number}
              onChange={(e) => handleChangeInput(e.target.value, dragon.value)}
            />
            <button
              type="button"
              className="border-none h-full bg-celeste text-m text-call-to-action w-6"
              onClick={() => setNumber(number + 1)}
            >
              +
            </button>
          </div>

          <p>
            <span className="text-caption-label text-s">Max:</span>
            <span className="text-s">
              {dragon.max}
              {SYMBOL.DIAMOND}
            </span>
          </p>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <p className="text-caption-label text-s">Available</p>
            <p className="text-base">
              {dragon.available}
              {SYMBOL.DIAMOND}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-caption-label text-s">Price</p>
            <p className="text-base">
              {dragon.price}
              {SYMBOL.DIAMOND}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-caption-label text-s">Total</p>
            <p className="text-base">
              {total}
              {SYMBOL.DIAMOND}
            </p>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 flex w-full">
        <button
          type="button"
          className="border-none px-4 py-2 rounded-xl bg-call-to-action w-full transition-all ease-in-out duration-300 hover:scale-95 focus:outline-none disabled:transition-none disabled:scale-100 disabled:bg-background disabled:text-celeste disabled:cursor-not-allowed"
          onClick={handleBuy}
          disabled={number === 0}
        >
          Buy
        </button>
      </div>
    </div>
  );
};

const DragonCategory = () => {
  return (
    <Fragment>
      <div className="grid grid-cols-5 md:grid-cols-3 sm:grid-cols-1 gap-5 sm:gap-4">
        {TYPE_OF_DRAGON.map((item) => (
          <Card key={item.value} dragon={item}></Card>
        ))}
      </div>
    </Fragment>
  );
};

export default DragonCategory;
