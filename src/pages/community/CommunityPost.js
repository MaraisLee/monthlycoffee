import React from "react";
import { Favorite } from "@mui/icons-material";

const Post = ({ setModalIsOpen }) => {
  return (
    <div
      className="relative group w-[35vw] h-[35vw] md:w-[17vw] md:h-[17vw] cursor-pointer"
      onClick={() => setModalIsOpen(true)}
    >
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-30 transition duration-500"
        src="./images/coffee.jpg"
        alt="pic"
      />
      <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition duration-500">
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
          <span className="text-red-500">
            <Favorite />
          </span>
          &nbsp;100
        </span>
      </div>
    </div>
  );
};

export default Post;
