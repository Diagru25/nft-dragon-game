import { FC, Fragment, useEffect, useState } from "react";
import InputLabel from "../input-label/InputLabel";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useFormik } from "formik";
import * as Yup from "yup";
import ProgressBar from "@/components/progress-bar/ProgressBar";
import { useRouter } from "next/router";
import { nftABI } from "@/constants/abi";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContractRead,
  UseContractReadConfig,
  UsePrepareContractWriteConfig,
  UseContractWriteConfig,
  useNetwork,
} from "wagmi";
import { useAccount } from "wagmi";
import { validAddress } from "@/helpers/validate";
import { toast } from "react-toastify";

const tabValue = {
  1: "firstTab",
  2: "secondTab",
};

const contractConfig = {
  address: "0x860aC6C8ab4f5D8cAaDEAa79dD8165282b82fC5e",
  abi: nftABI,
};

export default function FormSection() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>(tabValue[1]); //firstTab, secondTab
  const [mintAmount, setMintAmount] = useState<number>(1);
  const refToken = validAddress(router.query.ref);

  const { chain } = useNetwork();

  const {
    data: dataPrice,
    isError: errPrice,
    error: errorPrice,
    isSuccess: isHavePrice,
  } = useContractRead({
    ...contractConfig,
    functionName: "getCurrentPrice",
    args: [mintAmount],
  } as UseContractReadConfig);

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    ...contractConfig,
    functionName: "mint",
    args: [refToken, mintAmount],
    overrides: {
      //@ts-ignore
      value: dataPrice?.toString(),
    },
  } as UsePrepareContractWriteConfig);

  const {
    data,
    error: mintError,
    isError: isMintError,
    write,
  } = useContractWrite(config as UseContractWriteConfig);

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleMint = () => {
    console.log("nfisudhfs");
    if (chain?.id !== 80001 && chain?.id !== 42161) {
      return toast.error("Wrong chain! You must move to Arbitrum");
    }
    if (isPrepareError) {
      //@ts-ignore
      return toast.error(
        //@ts-ignore
        prepareError?.error?.data?.message || prepareError?.message
      );
    }
    if (isMintError) {
      console.log("nfisudhfs");
      //@ts-ignore
      return toast.error(mintError?.error?.data?.message || mintError?.message);
    }
    if (isHavePrice) {
      console.log("mint");
      write?.();
    } else {
      console.log(errorPrice);
    }
  };

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
            MINT NFT
          </div>
          <div
            className={` ${
              activeTab === tabValue[2]
                ? "border-b border-primary text-primary font-bold "
                : ""
            } w-fit px-2 hover:cursor-pointer`}
            onClick={() => setActiveTab(tabValue[2])}
          >
            CLAIM TOKEN
          </div>
        </div>

        {activeTab === tabValue[1] ? (
          <FormOne
            writeFnc={handleMint}
            isMintLoading={isLoading}
            handleChangeMintAmount={(value: number) => setMintAmount(value)}
          />
        ) : (
          <FormTwo />
        )}
        <div className={"text-2xl font-bold text-center text-primary"}>
          {isSuccess && "Mint Successfully!"}
          {isLoading && "Minting..."}
        </div>
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
      <h3 className="text-xl font-bold my-4">
        Claim $AiChick for OG NTFs Holder
      </h3>
      <h3 className="text-xl font-bold my-4 text-primary">Coming soon</h3>
    </div>
  );

  return (
    <div className="p-6">
      <h3 className="text-xl font-bold my-4">
        Claim Airdrop for $AiChick OG NFTs
      </h3>
      {/* <p className="font-light my-4">Who is eligible??</p>
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
      </div> */}
      <div className="h-8 sm:h-4"></div>
      <div className="mt-8 sm:mt-4">
        <InputLabel
          name="nftNumber"
          label="Your Airdrop Allocation"
          placeholder="0.00"
          onChange={form.handleChange}
          value={form.values.nftNumber}
        />
        {form.errors.nftNumber && form.touched.nftNumber && (
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

type PropsFormOne = {
  writeFnc: any;
  isMintLoading: boolean;
  handleChangeMintAmount: (value: number) => void;
};
const FormOne: FC<PropsFormOne> = ({
  writeFnc,
  isMintLoading,
  handleChangeMintAmount,
}) => {
  const [mintedValue, setMintedValue] = useState<{
    totalMinted: number;
    ownerMinted: number;
  }>({ totalMinted: 0, ownerMinted: 0 });
  const [inputError, setInputError] = useState<string>("");
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const { refetch } = useContractRead({
    ...contractConfig,
    functionName: "getTotalMintedNftAndOfOwner",
    onSuccess(data: any) {
      const totalMinted = Number(data[0]);
      const ownerMinted = Number(data[1]);
      setMintedValue({ totalMinted, ownerMinted });
    },
  } as UseContractReadConfig);

  const { address, isConnected: isConnectedAccount } = useAccount();

  useEffect(() => {
    refetch();
  }, [isMintLoading, refetch]);

  useEffect(() => {
    if (isConnectedAccount) setIsConnected(true);
    else setIsConnected(false);
  }, [isConnectedAccount]);

  const handleInvite = () => {
    if (isConnected) {
      const inviteLink = `https://aichick.io/?ref=${address}`;
      navigator.clipboard
        .writeText(inviteLink)
        .then(() => {
          return toast.success("successfully copied your invite link!");
        })
        .catch(() => {
          return toast.error("something went wrong");
        });
    }
  };

  const handleMint = () => {
    if (isConnected) {
      writeFnc();
    }
  };

  const handleChangeMintInput = (e: any) => {
    const value = Number(e.target.value);
    const restAmountMint = 10 - mintedValue.ownerMinted;
    if (!isNaN(value)) {
      if (Number.isInteger(value) && value >= 1 && value <= restAmountMint) {
        setInputError("");
        handleChangeMintAmount(value);
        return;
      } else {
        if (restAmountMint === 0) setInputError("You have minted 10/10");
        else
          setInputError(
            `value must be greater than 0 and less than ${restAmountMint + 1}`
          );
        return;
      }
    } else {
      setInputError("Value is not a number");
      return;
    }
  };

  return (
    <div className="p-6">
      <div className="flex gap-2 items-center">
        <CheckCircleIcon className="w-6 h-6 stroke-black stroke-2" />
        <p className="my-4 font-bold">AiChicken OG Collection NFT</p>
      </div>
      <div className="h-8 sm:h-2"></div>
      <div className="my-4">
        <span className="text-xl">🐔</span> AiChick OG NFTs holder will get 60%
        supply of $AiChick.
      </div>
      <div className="my-1">1 OG NFT = 1,500,000,000,000 $AiChick.</div>
      {isConnected && (
        <div className="font-semibold text-sm mt-4 text-primary">
          Owner minted: {mintedValue.ownerMinted}
        </div>
      )}

      <div className="flex flex-col gap-6 mt-4">
        <ProgressBar minted={mintedValue.totalMinted} total={40000} />
      </div>
      {(mintedValue.ownerMinted < 10 && isConnected) ? (
        <div className="mt-8 sm:mt-4">
          <InputLabel
            name="mintAmount"
            label="Mint Amount"
            placeholder="0"
            onChange={handleChangeMintInput}
            defaultValue={1}
          />
          {inputError && (
            <span className=" text-xs" style={{ color: "red" }}>
              {inputError}
            </span>
          )}
        </div>
      ) : null}

      <div className="flex justify-between sm:flex-col">
        <button
          className={`mt-5 rounded-md bg-sky-600 border px-4 py-2 ${
            isMintLoading || mintedValue.ownerMinted > 10 || !isConnected
              ? "bg-gray"
              : "hover:text-primary hover:border-primary hover:bg-primary-light"
          }`}
          onClick={handleMint}
          disabled={
            isMintLoading || mintedValue.ownerMinted > 10 || !isConnected
          }
        >
          {isMintLoading ? "MINTING..." : "MINT"}
        </button>
        <button
          className="mt-5 rounded-md bg-sky-600 border px-4 py-2 hover:bg-sky-500 hover:text-primary hover:border-primary hover:bg-primary-light"
          onClick={handleInvite}
        >
          INVITE 15%
        </button>
      </div>
    </div>
  );
};
