import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-between items-center px-8 py-2 bg-sky-600">
      <div>
        <img
          src="https://aishibaog.xyz/static/media/logo.adf6243f.png"
          alt="img"
          width={60}
          height={60}
        />
      </div>
      <div className="flex items-center gap-8 pr-4">
        <nav className="flex items-center gap-3">
          <a className="hover:text-white hover:cursor-pointer">Home</a>
          <a className="hover:text-white hover:cursor-pointer">AirDrop</a>
          <a className="hover:text-white hover:cursor-pointer">Perks</a>
          <a className="hover:text-white hover:cursor-pointer">Staking</a>
          <a className="hover:text-white hover:cursor-pointer">Tokenomics</a>
          <a className="hover:text-white hover:cursor-pointer">Roadmap</a>
        </nav>
        <button
          className="text-white shadow-md p-2 rounded-md hover:bg-blue-800"
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.2) 0px 3px 1px -2px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px",
          }}
        >
          CONNECT WALLET
        </button>
      </div>
    </div>
  );
}

export default Header;
