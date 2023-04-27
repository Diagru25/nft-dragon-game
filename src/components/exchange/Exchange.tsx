import { Fragment } from "react";
import Section from "../common/Section";
import camelot from "@/assets/camelot.png";
import uniswap from "@/assets/uniswap.png";
import dext from "@/assets/dext.jpeg";
import Image from "next/image";

export default function Exchange() {
  return (
    <Fragment>
      <div
        id="tokenomics"
        className="p-10 flex flex-col items-center justify-center container mx-auto"
      >
        <Section title="TRADE AICHICK ON THIS EXCHANGES">
          <div className="flex justify-around w-full pb-10 sm:pb-8 border-b-2 border-primary flex-wrap text-3xl sm:text-2xl">
            <a
              href="https://app.camelot.exchange/"
              target="_blank"
              className="flex flex-col gap-3 items-center text-center py-2 hover:cursor-pointer hover:text-primary hover:font-semibold"
            >
              <Image src={camelot} alt="camelot" width={40} height={40} />
              Camelot
            </a>
            <a
              href="https://uniswap.org/"
              target="_blank"
              className="flex flex-col gap-3 items-center text-center p-1 hover:cursor-pointer hover:text-primary hover:font-semibold"
            >
              <Image src={uniswap} alt="camelot" width={40} height={40} />
              Uniswap
            </a>
            <a
              href="https://www.dextools.io/app/"
              target="_blank"
              className="flex flex-col gap-3 items-center text-center p-1 hover:cursor-pointer hover:text-primary hover:font-semibold"
            >
              <Image src={dext} alt="camelot" width={40} height={40} />
              DEXTools
            </a>
          </div>
          <div className="flex gap-4 justify-center text-2xl mt-10 sm:text-xl sm:mt-8">
            <a
              href="#"
              className="hover:cursor-pointer hover:text-primary"
              target="_blank"
            >
              Arbitrum
            </a>
            |
            <a
              href="#"
              className="hover:cursor-pointer hover:text-primary"
              target="_blank"
            >
              Microsoft
            </a>
            |
            <a
              href="#"
              className="hover:cursor-pointer hover:text-primary"
              target="_blank"
            >
              Twitter
            </a>
          </div>
        </Section>
      </div>
    </Fragment>
  );
}
