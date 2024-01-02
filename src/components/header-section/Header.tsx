import Link from "next/link";
import Image from "next/image";
import img from "@/assets/chicken.png";
import ButtonConnectWallet from "../button-connect-wallet/ButtonConnectWallet";
import { Fragment } from "react";
import MenuIcon from "../icon/Menu";
import HumburgerMenu from "../humburger-menu/HumburgerMenu";
import useToggle from "@/hooks/useToggle";
import CloseIcon from "../icon/Close";

interface INavLink {
  label: string;
  value: string;
}

function Header() {
  const [toggleMenu, setToggleMenu] = useToggle(false);
  const navLinks: Array<INavLink> = [
    {
      label: "Home",
      value: "home",
    },

    {
      label: "Perks",
      value: "perks",
    },

    {
      label: "Tokenomics",
      value: "tokenomics",
    },
    {
      label: "Tax burn",
      value: "tax-burn",
    },
  ];

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleMoveToDiv = (id: string) => {
    if (id === "home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      const elem = document.getElementById(id);
      const yOffset = -60;
      if (elem) {
        const y =
          elem.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <Fragment>
      <section className="sm:hidden sticky top-0 left-0 w-full items-center py-2 bg-light z-50 shadow-primary-light">
        <section className="flex container mx-auto justify-between">
          <div>
            <Image src={img} alt="img" width={60} height={60} />
          </div>
          <div className="flex items-center gap-8 pr-4">
            {/* <nav className="flex items-center gap-3">
              {navLinks.map((link) => (
                <div
                  key={link.value}
                  className={`px-3 py-1 font-semibold transition duration-300 box-border border-transparent rounded-lg border hover:text-primary hover:border-gray hover:cursor-pointer`}
                  onClick={() => handleMoveToDiv(link.value)}
                >
                  {link.label}
                </div>
              ))}
            </nav> */}
            <ButtonConnectWallet />
          </div>
        </section>
      </section>

      <div className="sm:block hidden fixed w-screen top-0 left-0 z-50">
        {toggleMenu && <div className="overlay" />}

        <div className="flex justify-between sticky w-full items-center py-2 bg-light z-50 shadow-primary-light px-5">
          <Image src={img} alt="img" width={60} height={60} />
          <ButtonConnectWallet />
          <button onClick={handleToggleMenu}>
            {toggleMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {toggleMenu && <HumburgerMenu onClose={() => setToggleMenu(false)} />}
      </div>
    </Fragment>
  );
}

export default Header;
