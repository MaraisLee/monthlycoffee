import { Paid } from "@mui/icons-material";
import React from "react";
import { txtShadow } from "utils/colors";

const MonExpend = () => {
  return (
    <div className="flex justify-between items-center bg-[#F8F8E5] p-10 border border-black md:row-span-2">
      <div className="flex flex-col text-center gap-2">
        <span
          className="text-xl font-semibold text-white"
          style={{ textShadow: `${txtShadow}` }}
        >
          이번달 총 지출
        </span>
        <span
          className="text-3xl text-center text-yellow-300"
          style={{ textShadow: `${txtShadow}` }}
        >
          100,000원
        </span>
      </div>
      <span className="text-[#7A605B]">
        <Paid style={{ fontSize: "55" }} />
      </span>
    </div>
  );
};

export default MonExpend;
