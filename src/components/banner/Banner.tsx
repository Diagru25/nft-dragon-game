import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import img from "@/assets/chicken.png";

export default function Banner() {
  return (
    <div className="p-10 mb-10 relative">
      <div className=" text-gray-400">
        <div className="pl-10">
          <h1 className="text-5xl my-9 font-bold text-white">
            Meet <span className="text-orange-400">Ai</span>Shiba
          </h1>
          <h4 className="my-2 font-bold">
            The Community-inspired meme coin for arbitrum blockchain
          </h4>
          <div className="flex gap-2 items-center">
            <CheckCircleIcon className="w-6 h- stroke-white" />
            <p className="my-4">Zero FUD</p>
          </div>
          <div className="flex gap-2 items-center">
            <CheckCircleIcon className="w-6 h-6 stroke-white" />
            <p className="my-4">100% Community Owned</p>
          </div>
          <div className="flex gap-2 items-center">
            <CheckCircleIcon className="w-6 h-6 stroke-white" />
            <p className="my-4">Zero FUGAZI</p>
          </div>
        </div>
      </div>
      <Image
        src={img}
        alt="img"
        style={{
          position: "absolute",
          left: "50%",
          top: "-1%",
          width: "40%",
        }}
      />
    </div>
  );
}
