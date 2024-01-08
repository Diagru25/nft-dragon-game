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
      className="font-semibold underline transition-all transform hover:scale-95 hover:ease-in-out"
    >
      Docs
    </a>
  );
};

const Hero = () => {
  const title = `Welcome to \nPolyragon`;
  const description = `The Polygon Network reward pool with the \nrichest daily return and lowest development fee,\ndaily income of up to 8%, and a referral bonus \nof up to 10%`;

  const cardTitle = "What is Polyragon?";
  const cardDescription = `Dragon is considered a symbol of strength and prosperity. Polyragon will help you find gems to increase your assets and bring a good life.`;

  return (
    <div className="flex flex-wrap justify-between gap-4 py-20 sm:py-36">
      <div>
        <h1 className="text-4xl whitespace-pre-line sm:whitespace-normal sm:text-2xl">
          {title}
        </h1>
        <p className="whitespace-pre-line sm:whitespace-normal text-l sm:text-base">
          {description}&nbsp;(
          <DocLink />)
        </p>
      </div>

      <div className="max-w-sm">
        <div className="flex flex-col overflow-hidden bg-background-secondary rounded-2xl">
          <Image src={GIF.BANNER} alt="COMMON.IMAGE.POLYRAGON" priority />

          <div className="p-5">
            <p className="font-semibold leading-8 text-l">{cardTitle}</p>
            <p className="text-base leading-6">{cardDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
