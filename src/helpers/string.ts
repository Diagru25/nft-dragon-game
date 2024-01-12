export const numberWithCommas = (x: number | string): string => {
  if (!x) return "0";
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const formatValueContract = (
  data: string,
  env: "dev" | "prod" = "dev"
) => {
  const arr = env === "dev" ? new Array(9) : new Array(18);
  return data + arr.fill(0).join("");
};

export const shortString = (str: string) => {
  if (!str) return "";
  if (str.length <= 8) return str;
  const first = str.slice(0, 4);
  const last = str.slice(-4);

  return first + "..." + last;
};
