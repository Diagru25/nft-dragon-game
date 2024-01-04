import React, { useState } from "react";
import CopyIcon from "../icon/Copy";
import { toast } from "react-toastify";

const ReferralLink = () => {
  const [refLink] = useState("https***D2f6");

  const handleCopy = (link: string) => {
    const message = `Copy referral code ${link} success`;
    toast.success(message, {});
  };

  return (
    <div className="flex items-center justify-center px-4 gap-4 bg-zinc-900 rounded-2xl h-10 overflow-hidden">
      <h5 className="text-xs">{refLink}</h5>

      <button
        type="button"
        onClick={() => handleCopy(refLink)}
        className="bg-transparent outline-none rounded-full p-1 hover:bg-white hover:bg-opacity-50"
      >
        <CopyIcon className="w-4 h-4" />
      </button>
    </div>
  );
};

export default ReferralLink;
