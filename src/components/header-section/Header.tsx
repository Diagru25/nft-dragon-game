import { Fragment } from "react";
import useToggle from "@/hooks/useToggle";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import ButtonConnectWallet from "../button-connect-wallet/ButtonConnectWallet";
import MenuIcon from "../icon/Menu";
import CloseIcon from "../icon/Close";
import ReferralLink from "../referral-link/ReferralLink";
import TVL from "../tvl/TVL";
import TypeOfDragon from "../type-of-dragon/TypeOfDragon";

interface INavLink {
  label: string;
  value: string;
}

function Header() {
  const [toggleMenu, setToggleMenu] = useToggle(false);
  const navLinks: Array<INavLink> = [
    {
      label: "Docs",
      value: "docs",
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
      <section className="sm:hidden sticky top-0 left-0 w-full items-center py-2 bg-light z-50 shadow-primary-light ml-auto text-white bg-orange-900 bg-opacity-30">
        <section className="flex container mx-auto justify-end">
          <div className="flex items-center gap-8 pr-4">
            <nav className="flex items-center gap-2">
              <TVL />
              {navLinks.map((link) => (
                <div
                  key={link.value}
                  className={`px-3 py-1 font-semibold transition duration-300 box-border border-transparent hover:text-orange-600 hover:underline hover:underline-offset-2 hover:cursor-pointer`}
                  onClick={() => handleMoveToDiv(link.value)}
                >
                  {link.label}
                </div>
              ))}
            </nav>

            <TypeOfDragon />

            <ReferralLink />
            <ButtonConnectWallet />
          </div>
        </section>
      </section>

      <div className="sm:block hidden fixed w-screen top-0 left-0 z-50">
        {toggleMenu && <div className="overlay" />}

        <div className="flex justify-between sticky w-full items-center py-2 bg-light z-50 shadow-primary-light px-5">
          <ButtonConnectWallet />
          <button onClick={handleToggleMenu}>
            {toggleMenu ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
        {toggleMenu && <HamburgerMenu onClose={() => setToggleMenu(false)} />}
      </div>
    </Fragment>
  );
}

export default Header;
