import { StaticImageData } from "next/image";

export interface IDragon {
  imgSrc: StaticImageData | string;
  label: string;
  value: number;
  price: number;
  name: string;
  upTo: string;
  max: number;
  available: number;
}
