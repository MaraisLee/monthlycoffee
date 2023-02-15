import React from "react";
import { txtShadow } from "utils/colors";

const Budget = () => {
  return (
    <div className="bg-[#F8F8E5] text-center p-10 border border-black md:row-span-1">
      <span
        className="text-xl font-semibold text-white"
        style={{ textShadow: `${txtShadow}` }}
      >
        이번달 목표
      </span>
    </div>
  );
};

export default Budget;
