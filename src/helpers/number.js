export class BigDecimal {
  constructor(value) {
    let [ints, decis] = String(value).split(".").concat("");
    decis = decis.padEnd(BigDecimal.decimals, "0");
    this.bigint = BigInt(ints + decis);
  }
  static fromBigInt(bigint) {
    return Object.assign(Object.create(BigDecimal.prototype), { bigint });
  }
  divide(divisor) {
    // You would need to provide methods for other operations
    return BigDecimal.fromBigInt(
      (this.bigint * BigInt("1" + "0".repeat(BigDecimal.decimals))) /
        divisor.bigint
    );
  }
  toString() {
    const s = this.bigint.toString().padStart(BigDecimal.decimals + 1, "0");
    return (
      s.slice(0, -BigDecimal.decimals) +
      "." +
      s.slice(-BigDecimal.decimals).replace(/\.?0+$/, "")
    );
  }
}
BigDecimal.decimals = 26; // Configuration of the number of decimals you want to have.
