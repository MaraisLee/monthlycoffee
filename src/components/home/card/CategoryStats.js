import React from "react";
import { txtShadow } from "utils/colors";
import MyResponsivePie from "./MyResponsivePie";

const CategoryStats = () => {
  return (
    <div className="bg-[#F8F8E5] text-center p-10 border border-black md:row-span-2">
      <span
        className="text-xl font-semibold text-white"
        style={{ textShadow: `${txtShadow}` }}
      >
        카테고리별 지출
      </span>
      <div className="h-[20vh]">
        <MyResponsivePie />
      </div>
    </div>
  );
};

export default CategoryStats;
