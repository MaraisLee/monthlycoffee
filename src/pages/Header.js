import { LocalCafeOutlined, LocalCafeTwoTone } from "@mui/icons-material";
import { Avatar, Button } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-5 w-full h-[10vh] bg-white border-b border-black">
      <div className="flex items-center">
        <div className="flex justify-center px-8">
          <img src="./images/logo.png" alt="logo" className="w-[3rem]" />
        </div>
        <div className="flex items-center h-[10vh] pl-7 border-l border-black">
          <span className="text-4xl font-semibold">WELCOME, 나몰빼미</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="outlined" color="success">
          + 입력
        </Button>
        <Avatar />
      </div>
    </header>
  );
};

export default Header;
