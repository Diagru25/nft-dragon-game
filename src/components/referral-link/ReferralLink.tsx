import React from "react";

const ReferralLink = () => {
  return (
    <div
      className="flex flex-col items-center justify-center p-4 gap-4  border-2 border-yellow-950 rounded-2xl"
      style={{
        margin: "0 8%",
      }}
    >
      <h5 className="text-2xl">Referral Link</h5>
      <div className="py-2 px-3 outline-none text-xs font-light border border-black bg-white">
        https://coqminer.com/?ref=0x06BA7A80F11BC30aDAc7519049d9Fe9b7673D2f6
      </div>

      <button
        type="button"
        disabled
        className="w-full p-4 bg-yellow-950 rounded-xl text-yellow-600"
      >
        COPY TO CLIPBOARD
      </button>

      <div>
        Earn 12% of the BNB used to compound from anyone who uses your referral
        link
      </div>
    </div>
  );
};

export default ReferralLink;
