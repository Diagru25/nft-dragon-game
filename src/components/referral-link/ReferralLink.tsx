import React, { useState } from "react";
import CopyIcon from "../icon/Copy";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import Image from "next/image";
import { TYPE_DRAGON } from "@/assets/images";

const ReferralLink = () => {
  const { address, isConnected } = useAccount();
  const [refLink] = useState("https***D2f6");

  const handleCopy = () => {
    if (isConnected) {
      const inviteLink = `http://polyragon.com?ref=${address}`;
      navigator.clipboard
        .writeText(inviteLink)
        .then(() => {
          const message = `Copy referral code ${inviteLink} success`;
          return toast.success(message, {});
        })
        .catch(() => {
          return toast.error("something went wrong");
        });
    }
  };

  return (
    <div className="flex justify-around mt-20 mb-20 p-14 md:p-12 sm:p-10 bg-background-secondary rounded-2xl">
      <Image
        src={TYPE_DRAGON.REFERRAL}
        alt="Polyragon image referral"
        width={400}
        height={400}
        className="rounded-2xl sm:hidden"
      />

      <div className="flex flex-col max-w-md">
        <h1 className="text-2xl font-semibold capitalize sm:text-xl">
          Referral Link
        </h1>
        <p className="capitalize text-l sm:text-base">
          Up to 10% And You Can Withdraw Anytime.
        </p>

        <div className="flex items-center justify-between px-5 py-4 mt-10 bg-white sm:mt-6 sm:py-3 sm:px-4 rounded-3xl">
          <h5 className="text-caption-label">{refLink}</h5>
          <button
            type="button"
            onClick={handleCopy}
            className="p-1 bg-transparent rounded-full"
          >
            <CopyIcon
              className="w-8 h-8 rounded-full sm:w-6 sm:h-6"
              stroke="var(--celeste)"
            />
          </button>
        </div>
        <p className="text-sm xs:text-base">
          The referral link is only available when you have at least 1
          Polyragon.
        </p>
      </div>
    </div>
  );
};

export default ReferralLink;
