import React, { useEffect, useState } from "react";
import { Button } from "@mantine/core";
import { LOCAL_STORAGE_TYPE_DRAGON, TYPE_OF_DRAGON } from "@/constants/common";

const TypeOfDragon = () => {
  const [nameDragon, setNameDragon] = useState("No dragon");

  const getNameDragon = (data: string) => {
    if (!data) return "No dragon";

    const foundObj = TYPE_OF_DRAGON.find((el) => el.matic === data);

    if (foundObj) return foundObj.name;
    else return "No Dragon";
  };

  useEffect(() => {
    const valueTypeDragon = localStorage.getItem(LOCAL_STORAGE_TYPE_DRAGON);
    if (valueTypeDragon) {
      const _name = getNameDragon(valueTypeDragon);
      setNameDragon(_name);
    }
  }, []);
  return (
    <>
      <Button variant="outline">
        <p className="text-neutral-200">{nameDragon}</p>
      </Button>
    </>
  );
};

export default TypeOfDragon;
