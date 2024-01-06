import { Fragment } from "react";
import useToggle from "@/hooks/useToggle";
import HamburgerMenu from "../hamburger-menu/HamburgerMenu";
import ButtonConnectWallet from "../button-connect-wallet/ButtonConnectWallet";
import MenuIcon from "../icon/Menu";
import CloseIcon from "../icon/Close";
import ReferralLink from "../referral-link/ReferralLink";
import TVL from "../tvl/TVL";
import TypeOfDragon from "../type-of-dragon/TypeOfDragon";
import { DOCS } from "@/constants/common.constant";

interface INavLink {
  label: string;
  value: string;
}

function Header() {
  const [toggleMenu, setToggleMenu] = useToggle(false);
  const navLinks: Array<INavLink> = [
    {
      label: "Docs",
      value: DOCS,
    },
  ];

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleMoveToDiv = (value: string) => {
    const a = document.createElement("a");
    a.href = value;
    a.target = "_blank";
    a.click();
    a.remove();
  };

  return (
    <Fragment>
      <section className="sticky top-0 left-0 z-50 items-center w-full py-2 ml-auto text-white sm:hidden shadow-primary-light bg-opacity-30">
        <section className="container flex justify-end mx-auto">
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

      <div className="fixed top-0 left-0 z-50 hidden w-screen sm:block">
        {toggleMenu && <div className="overlay" />}

        <div className="sticky z-50 flex items-center justify-between w-full px-5 py-2">
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
