import React, { FC } from "react";
interface INavLink {
  label: string;
  value: string;
}

type Props = {
  onClose: () => void;
};
const HumburgerMenu: FC<Props> = ({ onClose }) => {
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
      label: "Roadmap",
      value: "roadmap",
    },
  ];

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
    onClose();
  };

  return (
    <div className="absolute z-20 flex flex-col gap-2 py-2 px-1 w-full bg-light font-semibold">
      {navLinks.map((link, id) => (
        <div
          key={id}
          className={`p-2`}
          onClick={() => handleMoveToDiv(link.value)}
        >
          {link.label}
        </div>
      ))}
    </div>
  );
};

export default HumburgerMenu;
