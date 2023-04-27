import { Fragment, useState } from "react";
import InputLabel from "../input-label/InputLabel";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import * as Yup from "yup";

const tabValue = {
  1: "firstTab",
  2: "secondTab",
};

export default function FormSection() {
  const [activeTab, setActiveTab] = useState<string>(tabValue[1]); //firstTab, secondTab
  return (
    <Fragment>
      <div className="m-auto p-10 max-w-3xl w-full bg-light rounded-2xl drop-shadow-2xl">
        <div className="border-b border-solid border-primary-light flex gap-5 w-full mb-2">
          <div
            className={` ${
              activeTab === tabValue[1]
                ? "border-b border-primary text-primary font-bold "
                : ""
            } w-fit px-2 hover:cursor-pointer`}
            onClick={() => setActiveTab(tabValue[1])}
          >
            NFT ClAIM
          </div>
          <div
            className={` ${
              activeTab === tabValue[2]
                ? "border-b border-primary text-primary font-bold "
                : ""
            } w-fit px-2 hover:cursor-pointer`}
            onClick={() => setActiveTab(tabValue[2])}
          >
            ARB/OG CLAIM
          </div>
        </div>

        {activeTab === tabValue[1] ? <FormOne /> : <FormTwo />}
      </div>
    </Fragment>
  );
}

const valueRadio = {
  1: "Early Birds",
  2: "Arb Claimooorssss",
};

const FormTwo = () => {
  const form = useFormik({
    initialValues: {
      nftNumber: "",
      selectedType: "",
    },
    validationSchema: Yup.object().shape({
      nftNumber: Yup.number()
        .required("Value is not Empty")
        .moreThan(0, "Value must be greater than 0"),
      selectedType: Yup.string().required("You must select."),
    }),
    onSubmit: (data) => {
      //Code here
      console.log(data);
      form.resetForm();
    },
  });

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold my-4">Claim Airdrop</h3>
      <p className="font-light my-4">Who is eligible??</p>
      <div className="flex gap-2 items-center">
        <CheckCircleIcon className="w-6 h-6 stroke-black" />
        <p className="my-3 font-bold">Early Birds</p>
      </div>
      <div className="flex gap-2 items-center">
        <CheckCircleIcon className="w-6 h-6 stroke-black" />
        <p className="my-3 font-bold">Arb Claimooorssss</p>
      </div>
      <p className="font-light mb-2 text-gray-500">Choose A Side</p>
      <div className="flex gap-4 font-light pb-4">
        <div className="flex items-center gap-2">
          <input
            type="radio"
            checked={form.values.selectedType === valueRadio[1] ? true : false}
            className="h-5 w-5"
            onChange={(e) => {
              const checked = e.target.checked;
              if (checked) form.setFieldValue("selectedType", valueRadio[1]);
            }}
          />
          <span>Early Birds</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="radio"
            checked={form.values.selectedType === valueRadio[2] ? true : false}
            className="h-5 w-5"
            onChange={(e) => {
              const checked = e.target.checked;
              if (checked) form.setFieldValue("selectedType", valueRadio[2]);
            }}
          />
          <span>Arb Claimooorssss</span>
        </div>
        {form.errors.selectedType && (
          <span className="text-red-500 text-xs">
            {form.errors.selectedType}
          </span>
        )}
      </div>
      <div className="mt-4">
        <InputLabel
          name="nftNumber"
          onChange={form.handleChange}
          value={form.values.nftNumber}
        />
        {form.errors.nftNumber && (
          <span className=" text-xs" style={{ color: "red" }}>
            {form.errors.nftNumber}
          </span>
        )}
      </div>

      <button
        className="mt-5 rounded-md  bg-sky-600 border px-4 py-2 hover:bg-sky-500"
        onClick={form.submitForm}
      >
        CONNECT WALLET
      </button>
    </div>
  );
};

const FormOne = () => {
  const form = useFormik({
    initialValues: {
      nftNumber: "",
    },
    validationSchema: Yup.object().shape({
      nftNumber: Yup.number()
        .required("Value is not Empty")
        .moreThan(0, "Value must be greater than 0"),
    }),
    onSubmit: (data) => {
      //Code here
      console.log(data);
      form.resetForm();
    },
  });

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold my-4">Claim Airdrop For Your NFT</h3>
      <p className="font-light my-4">Who is eligible??</p>
      <div className="flex gap-2 items-center">
        <CheckCircleIcon className="w-6 h-6 stroke-black stroke-2" />
        <p className="my-4 font-bold">AiChicken OG Collection NFT Holder</p>
      </div>
      <div className="mt-4">
        <InputLabel
          name="nftNumber"
          onChange={form.handleChange}
          value={form.values.nftNumber}
        />
        {form.errors.nftNumber && (
          <span style={{ color: "red" }} className="text-xs">
            {form.errors.nftNumber}
          </span>
        )}
      </div>

      <button
        className="mt-5 rounded-md  bg-sky-600 border px-4 py-2 hover:bg-sky-500"
        onClick={form.submitForm}
      >
        CONNECT WALLET
      </button>
    </div>
  );
};
