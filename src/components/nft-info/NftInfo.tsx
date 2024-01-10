import { SYMBOL } from "@/constants/nft.constant";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TriangleUpIcon from "@/components/icon/TriangleUp";
import TriangleDownIcon from "@/components/icon/TriangleDown";

const NftInfo = () => {
  const [price, setPrice] = useState({
    price: 0,
    priceYesterday: 0,
  });

  const getPrice = async () => {
    try {
      const data = await axios.get(
        "https://api.diadata.org/v1/assetQuotation/Polygon/0x0000000000000000000000000000000000001010"
      );

      setPrice({
        price: data.data.Price,
        priceYesterday: data.data.PriceYesterday,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPrice();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => getPrice(), 120000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-start divide-x sm:justify-center divide-caption-label text-s">
      <p className="px-2">1 {SYMBOL.DIAMOND} = 1 USDT</p>
      <p className="px-2">
        MATICUSDT = <b>{price.price.toFixed(4)}</b> USDT
      </p>

      {price.priceYesterday ? (
        <p
          className={`${
            price.price < price.priceYesterday ? "text-red" : "text-green"
          } flex items-center pl-2 gap-1`}
        >
          {price.price < price.priceYesterday ? (
            <TriangleDownIcon />
          ) : (
            <TriangleUpIcon />
          )}

          {(
            ((price.price - price.priceYesterday) / price.priceYesterday) *
            100
          ).toFixed(2) + " %"}
        </p>
      ) : null}
    </div>
  );
};

export default NftInfo;
