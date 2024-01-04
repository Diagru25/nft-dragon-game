import React, { FC } from "react";
import { toast } from "react-toastify";

const Feed: FC<{ className: string; style: object }> = ({
  className,
  style,
}) => {
  const handleOnClick = () => {
    toast.success("Feed success");
  };

  return (
    <button
      type="button"
      style={style}
      className={`${className} h-10 outline-none text-neutral-200 bg-sky-600 rounded-lg border-none px-4 py-2 hover:bg-opacity-90`}
      onClick={handleOnClick}
    >
      Feed the dragon
    </button>
  );
};

export default Feed;
