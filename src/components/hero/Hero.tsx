import Image from "next/image";
import React from "react";
import { GIF } from "@/assets/gif";
import { DOCS } from "@/constants/common.constant";

const DocLink = () => {
  return (
    <a
      href={DOCS}
      target="_blank"
      rel="noopener noreferrer"
      className="transform transition-all hover:scale-95 hover:ease-in-out font-semibold underline"
    >
      Doc
    </a>
  );
};

const Hero = () => {
  const title = `Welcome to \nPolyragon`;
  const description = `The Polygon Network reward pool with the \nrichest daily return and lowest development fee,\ndaily income of up to 8%, and a referral bonus \nof up to 10%`;

  const cardTitle = "What is Polyragon?";
  const cardDescription = `Dragon is considered a symbol of strength and prosperity. Polyragon will help you find gems to increase your assets and bring a good life.`;

  return (
    <div className="flex flex-wrap justify-between gap-4 py-20">
      <div>
        <h1 className="whitespace-pre-line sm:whitespace-normal text-4xl sm:text-2xl">
          {title}
        </h1>
        <p className="whitespace-pre-line sm:whitespace-normal text-l sm:text-base">
          {description}&nbsp;(
          <DocLink />)
        </p>
      </div>

      <div className="max-w-sm">
        <div className="bg-background-secondary flex flex-col rounded-2xl overflow-hidden">
          <Image src={GIF.BANNER} alt="COMMON.IMAGE.POLYRAGON" priority />

          <div className="p-5">
            <p className="text-l font-semibold leading-8">{cardTitle}</p>
            <p className="text-base leading-6">{cardDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
