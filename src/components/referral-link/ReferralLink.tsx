import React, { useState } from "react";
import CopyIcon from "../icon/Copy";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";

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
    <div className="flex items-center justify-center h-10 gap-4 px-4 overflow-hidden bg-zinc-900 rounded-2xl">
      <h5 className="text-xs">{refLink}</h5>

      <button
        type="button"
        onClick={handleCopy}
        className="p-1 bg-transparent rounded-full outline-none hover:bg-white hover:bg-opacity-50"
      >
        <CopyIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ReferralLink;
