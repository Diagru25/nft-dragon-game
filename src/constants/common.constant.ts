import { TYPE_DRAGON } from "@/assets/images";
import { IDragon } from "@/models/IDragon.model";

export const TYPE_OF_DRAGON: IDragon[] = [
  {
    imgSrc: TYPE_DRAGON.BRONZE,
    label: "Bronze Polyragon",
    value: 0,
    price: 50,
    name: "Bronze Polyragon",
    upTo: "0.5",
    max: 5000,
    available: 5000,
    dailyPercent: 2,
  },

  {
    imgSrc: TYPE_DRAGON.SILVER,
    label: "Silver Polyragon",
    value: 1,
    price: 100,
    name: "Silver Polyragon",
    upTo: "2",
    max: 1000,
    available: 1000,
    dailyPercent: 2.5,
  },

  {
    imgSrc: TYPE_DRAGON.GOLD,
    label: "Gold Polyragon",
    value: 2,
    price: 200,
    name: "Gold Polyragon",
    upTo: "8",
    max: 500,
    available: 500,
    dailyPercent: 3,
  },

  {
    imgSrc: TYPE_DRAGON.DIAMOND,
    label: "Diamond Polyragon",
    value: 3,
    price: 500,
    name: "Diamond Polyragon",
    upTo: "30",
    max: 200,
    available: 200,
    dailyPercent: 3.5,
  },

  {
    imgSrc: TYPE_DRAGON.RUBY,
    label: "Ruby Polyragon",
    value: 4,
    price: 1000,
    name: "Ruby Polyragon",
    upTo: "80",
    max: 100,
    available: 100,
    dailyPercent: 4,
  },
];

export const LOCAL_STORAGE_TYPE_DRAGON = "TYPE_DRAGON";

export const DOCS = "https://polyragon-organization.gitbook.io/polyragon/";
