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
      const inviteLink = `http://localhost:3000?ref=${address}`;
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
    <div className="mt-20 p-14 bg-background-secondary rounded-2xl flex justify-around mb-20">
      <Image
        src={TYPE_DRAGON.REFERRAL}
        alt="Polyragon image referral"
        width={400}
        height={400}
        className="rounded-2xl"
      />

      <div className="flex flex-col max-w-md">
        <h1 className="text-2xl font-semibold capitalize">Referral Link</h1>
        <p className="text-l capitalize">
          You can only receive a referral link after you purchase at least one
          Polyragon.
        </p>

        <div className="flex items-center justify-between bg-white mt-10 py-4 px-5 rounded-3xl">
          <h5 className="text-caption-label">{refLink}</h5>
          <button
            type="button"
            onClick={handleCopy}
            className="p-1 bg-transparent rounded-full"
          >
            <CopyIcon
              className="w-8 h-8 rounded-full"
              stroke="var(--celeste)"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralLink;
