import React from "react";
import TelegramIcon from "../icon/Telegram";
import TwitterIcon from "../icon/Twitter";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center py-10 font-semibold bg-background-secondary sm:px-10">
      <div className="container flex flex-col gap-4 mx-auto">
        <p className="font-bold leading-6 text-l">Polyragon</p>
        <div className="flex flex-col gap-2">
          <p className="text-base font-normal text-celeste">
            Join our community
          </p>
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/Polyragoncommunity"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TelegramIcon />
            </a>

            <a
              href="https://twitter.com/Polyragon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
        </div>
        <div className="w-full border border-caption-label"></div>
        <span className="font-normal text-s text-celeste">
          By Polyragon.com © 2024
        </span>
      </div>
    </footer>
  );
};

export default Footer;
