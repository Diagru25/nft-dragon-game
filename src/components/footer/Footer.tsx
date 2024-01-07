import React from "react";
import TelegramIcon from "../icon/Telegram";
import TwitterIcon from "../icon/Twitter";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center bg-background-secondary py-10 sm:px-10 font-semibold">
      <div className="container mx-auto flex flex-col gap-4">
        <p className="text-l font-bold leading-6">Polyragon</p>
        <div className="flex flex-col gap-2">
          <p className="text-base text-celeste font-normal">
            Join our community
          </p>
          <div className="flex items-center gap-2">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <TelegramIcon />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
              <TwitterIcon />
            </a>
          </div>
        </div>
        <div className="w-full border border-caption-label"></div>
        <span className="text-s text-celeste font-normal">
          By Polyragon.io © 2024
        </span>
      </div>
    </footer>
  );
};

export default Footer;
