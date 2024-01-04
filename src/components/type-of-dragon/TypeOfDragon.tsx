import React, { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { TYPE_OF_DRAGON } from "@/constants/common";
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
      <Button variant="outline">
        <p className="text-neutral-200">{getNameDragon(typeOfDragon)}</p>
      </Button>
    </>
  );
};

export default TypeOfDragon;
