import React, { useEffect, useState } from "react";
import { txtShadow } from "utils/colors";

const Budget = () => {
  const [value, setValue] = useState(0);
  const percent = 40;

  useEffect(() => {
    setValue(percent);
  }, []);

  return (
    <div className="bg-[#F8F8E5] text-center p-10 border border-black md:row-span-1 space-y-3">
      <span
        className="text-xl font-semibold text-white"
        style={{ textShadow: `${txtShadow}` }}
      >
        이번달 목표
      </span>
      <div
        className="progress-div"
        style={{
          width: "100%",
          backgroundColor: "rgb(233, 233, 233)",
          borderRadius: "0.5rem",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            backgroundColor: "#7A605B",
            height: 25,
            borderRadius: "1rem",
            transition: "1s ease",
          }}
          className="progress"
        />
      </div>
      <span className="block text-right">60,000 / 150,000</span>
    </div>
  );
};

export default Budget;
