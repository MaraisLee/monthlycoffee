import { Money } from "@mui/icons-material";
import React from "react";

const MonExpend = () => {
  return (
    <div className="flex justify-between items-center bg-[#F8F8E5] p-10 border border-black md:row-span-2">
      <div className="flex flex-col gap-2">
        <span
          className="text-2xl font-semibold text-white drop-shadow"
          style={{
            textShadow:
              "-1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black",
          }}
        >
          이번달 총 지출
        </span>
        <span className="text-xl text-center">100,000원</span>
      </div>
      <div className="bg-white p-3 border border-[#666]">
        <Money />
      </div>
    </div>
  );
};

export default MonExpend;
