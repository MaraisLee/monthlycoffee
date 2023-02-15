import { LocalCafeOutlined, LocalCafeTwoTone } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";
import { GreenBt } from "utils/basicCss";
import { txtShadow } from "utils/colors";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 w-full h-[15vh] bg-white border-b border-black">
      <div className="flex items-center">
        <div className="flex justify-center md:px-8">
          <img
            src="./images/logo.png"
            alt="logo"
            className="w-[3rem]"
          />
        </div>
        <div className="flex items-center h-[15vh] pl-7 md:border-l md:border-black">
          <span
            className="hidden md:block text-4xl font-semibold text-white"
            style={{ textShadow: `${txtShadow}` }}
          >
            WELCOME,&nbsp;
          </span>
          <span
            className="text-[2rem] md:text-4xl font-semibold text-yellow-300"
            style={{ textShadow: `${txtShadow}` }}
          >
            나몰빼미
          </span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden md:block">
          <GreenBt>+ 입력</GreenBt>
        </span>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
