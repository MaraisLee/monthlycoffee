import React from "react";
import { useSelector } from "react-redux";
import { txtShadow } from "utils/colors";

const MyCard = () => {
  const userData = useSelector((state) => state.user);
  return (
    <div className="flex flex-col justify-center items-center bg-[#F8F8E5] text-center p-10 border border-black md:row-span-2">
      <span
        className="text-xl font-semibold text-white"
        style={{ textShadow: `${txtShadow}` }}
      >
        <span className="text-yellow-300">{userData.nickname} </span>
        님의 카드
      </span>
      <img src="./images/card.png" alt="card" className="w-4/5 mx-auto mt-2" />
    </div>
  );
};

export default MyCard;
