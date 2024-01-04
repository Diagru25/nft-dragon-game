export const validAddress = (ref: any) => {
  const reg = new RegExp("^0x[a-fA-F0-9]{40}$");
  const isValid = reg.test(ref);

  return isValid ? ref : "";
};
