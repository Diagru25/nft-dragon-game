import React, { FC } from "react";
import TVL from "../tvl/TVL";
import TypeOfDragon from "../type-of-dragon/TypeOfDragon";
import ReferralLink from "../referral-link/ReferralLink";
interface INavLink {
  label: string;
  value: string;
}

type Props = {
  onClose: () => void;
};
const HamburgerMenu: FC<Props> = ({ onClose }) => {
  const navLinks: Array<INavLink> = [
    {
      label: "Docs",
      value: "https://polyragon-organization.gitbook.io/polyragon/",
    },
  ];

  return (
    <div
      style={{ background: "rgba(0,0,0,0.9)" }}
      className="absolute z-20 flex flex-col gap-2 w-full font-semibold h-screen p-4"
    >
      <TVL />
      {navLinks.map((link, id) => (
        <a
          key={id}
          className="text-neutral-200"
          href={link.value}
          rel="noopener noreferrer"
          target="_blank"
        >
          {link.label}
        </a>
      ))}
      <ReferralLink />
      <TypeOfDragon />
    </div>
  );
};

export default HamburgerMenu;
