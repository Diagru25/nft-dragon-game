import { CheckCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import img from '@/assets/chicken.png'

export default function Banner() {
	return (
    <section className="sm:p-5 relative container mx-auto">
      <h1 className="text-5xl py-9 font-black z-10">
        Meet <span className="text-primary">Ai</span>Chicken
      </h1>
      <h4 className="font-bold">
        The Community-inspired meme coin for arbitrum blockchain
      </h4>
      <div className="flex gap-2 items-center text-transparent sm:hidden">
        <CheckCircleIcon className="w-6 h-6 stroke-white" />
        <p className="my-4">Text 1</p>
      </div>
      <div className="flex gap-2 items-center text-transparent sm:hidden">
        <CheckCircleIcon className="w-6 h-6 stroke-white" />
        <p className="my-4">Text 2</p>
      </div>
      <div className="flex gap-2 items-center text-transparent sm:hidden">
        <CheckCircleIcon className="w-6 h-6 stroke-white" />
        <p className="my-4">Text 3</p>
      </div>

      <Image
        className="sm:-z-10 z-10"
        src={img}
        alt="img"
        style={{
          position: "absolute",
          left: "50%",
          top: "6%",
          width: "40%",
        }}
      />
    </section>
  );
}
