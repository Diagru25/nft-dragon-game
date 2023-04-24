export default function InputLabel() {
  return (
    <div className="relative w-full rounded-md border-solid border border-sky-500">
      <label
        htmlFor="price"
        className="block absolute text-sm font-medium leading-6 text-sky-400 -top-3 left-2 bg-white px-1.5"
      >
        Your Airdrop Allocation
      </label>
      {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <span className="text-gray-500 sm:text-sm">$</span>
      </div> */}
      <input
        style={{ fontSize: "1.125rem" }}
        type="text"
        name="price"
        id="price"
        className="block w-full rounded-md border-0 py-4 px-7 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 text-lg outline hover:outline-2"
        placeholder="0.00"
      />
    </div>
  );
}
