import React, { ChangeEvent } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { Checkbox, Stack } from "@mantine/core";
import { useThemeContext } from "../../context/app";

const TypeOfDragon = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const data = [
    {
      label: "Normal dragon 50 MATIC - 3% per day",
      value: 1,
    },

    {
      label: "Normal dragon 100 MATIC - 3.5% per day",
      value: 2,
    },

    {
      label: "Normal dragon 250 MATIC - 4% per day",
      value: 3,
    },

    {
      label: "Normal dragon 500 MATIC - 4.5% per day",
      value: 4,
    },

    {
      label: "Normal dragon 1000 MATIC - 5% per day",
      value: 5,
    },
  ];

  const handleChange = (e: string) => {
    console.log(e);
  };

  const handleSubmit = () => {
    close();
  };

  const { typeOfDragon, setTypeOfDragon }: any = useThemeContext();

  return (
    <>
      <Modal opened={opened} onClose={close} title="Type of Dragon" centered>
        <div className="flex flex-col gap-2 p-4">
          <Stack>
            {data.map((item, idx) => (
              <Checkbox
                key={idx}
                label={item.label}
                value={item.value}
                onChange={(e) => handleChange(e.target.value)}
              />
            ))}
          </Stack>
        </div>
        <div className="flex items-center justify-between">
          <Button type="button" onClick={handleSubmit} className="ml-auto">
            Confirm
          </Button>
        </div>
      </Modal>

      <div>{typeOfDragon}</div>
      <Button variant="outline" onClick={open}>
        <p className="text-neutral-200">Type of Dragons</p>
      </Button>
    </>
  );
};

export default TypeOfDragon;
