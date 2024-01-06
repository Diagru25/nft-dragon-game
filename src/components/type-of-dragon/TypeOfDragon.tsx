import React, { useEffect, useState } from "react";

import { TYPE_OF_DRAGON } from "@/constants/common.constant";
import { useThemeContext } from "@/context/app";
const getNameDragon = (data: string) => {
  if (!data) return "No dragon";

  const foundObj = TYPE_OF_DRAGON.find((el) => el.matic === data);

  if (foundObj) return foundObj.name;
  else return "No Dragon";
};
const TypeOfDragon = () => {
  //@ts-ignore
  const { typeOfDragon } = useThemeContext();

  return (
    <>
      <button type="button">
        <p className="text-neutral-200">{getNameDragon(typeOfDragon)}</p>
      </button>
    </>
  );
};

export default TypeOfDragon;
