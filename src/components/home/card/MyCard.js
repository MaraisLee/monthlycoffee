import React from "react";
import { txtShadow } from "utils/colors";

const MyCard = () => {
  return (
    <div className="bg-[#F8F8E5] text-center p-10 border border-black md:row-span-2">
      <span
        className="text-xl font-semibold text-white"
        style={{ textShadow: `${txtShadow}` }}
      >
        내 카드
      </span>
    </div>
  );
};

export default MyCard;
