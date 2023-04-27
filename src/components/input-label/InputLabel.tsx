export default function InputLabel({ value = "", onChange, ...rest }: any) {
  return (
    <div className="relative w-full rounded-md ">
      <div
        className="block absolute text-sm font-bold -top-4 left-2 px-1.5 z-20 bg-white"
        style={{
          zIndex: 1,
          top: "-15px",
          backgroundColor: "white",
        }}
      >
        Your Airdrop Allocation
      </div>
      <input
        style={{ fontSize: "1.125rem" }}
        type="number"
        className="block w-full rounded-md py-4 px-7 text-gray-900 placeholder:text-gray-400 sm:text-sm text-lg outline outline-gray "
        placeholder="0.00"
        value={value}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}
