import { TYPE_DRAGON } from "@/assets/images";
import { IDragon } from "@/models/IDragon.model";

export const TYPE_OF_DRAGON: IDragon[] = [
  {
    imgSrc: TYPE_DRAGON.BRONZE,
    label: "Bronze Dragon",
    value: 1,
    price: 50,
    name: "Bronze dragon",
    upTo: "0.5",
    max: 5000,
    available: 300,
    dailyPercent: 1,
  },

  {
    imgSrc: TYPE_DRAGON.SILVER,
    label: "Silver dragon",
    value: 2,
    price: 100,
    name: "Silver dragon",
    upTo: "2",
    max: 2000,
    available: 150,
    dailyPercent: 2,
  },

  {
    imgSrc: TYPE_DRAGON.GOLD,
    label: "Gold Dragon ",
    value: 3,
    price: 200,
    name: "Gold dragon",
    upTo: "8",
    max: 1000,
    available: 200,
    dailyPercent: 4,
  },

  {
    imgSrc: TYPE_DRAGON.DIAMOND,
    label: "Diamond Dragon",
    value: 4,
    price: 500,
    name: "Diamond dragon",
    upTo: "30",
    max: 500,
    available: 280,
    dailyPercent: 6,
  },

  {
    imgSrc: TYPE_DRAGON.RUBY,
    label: "Ruby Dragon",
    value: 5,
    price: 1000,
    name: "Ruby dragon",
    upTo: "80",
    max: 100,
    available: 30,
    dailyPercent: 8,
  },
];

export const LOCAL_STORAGE_TYPE_DRAGON = "TYPE_DRAGON";

export const DOCS = "https://polyragon-organization.gitbook.io/polyragon/";
