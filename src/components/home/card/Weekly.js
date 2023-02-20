import { ResponsiveBar } from "@nivo/bar";
import React from "react";
import { txtShadow } from "utils/colors";

const Weekly = () => {
  const data = [
    { x: "SUN", v: 0 },
    { x: "MON", v: 5000 },
    { x: "TUE", v: 12000 },
    { x: "WEN", v: 4500 },
    { x: "THU", v: 5500 },
    { x: "FRI", v: 6000 },
    { x: "SAT", v: 4500 },
  ];
  return (
    <div className="bg-[#F8F8E5] text-center p-10 border border-black md:row-span-2">
      <span className="text-2xl font-semibold text-white" style={{ textShadow: `${txtShadow}` }}>Weekly Coffee</span>
      <ResponsiveBar
        height={200}
        data={data}
        keys={["v"]}
        maxValue={15000}
        padding={0.3}
        margin={{
          top: 10,
          right: 10,
          bottom: 36,
          left: 40,
        }}
        indexBy="x"
        enableLabel={false}
        borderRadius={2}
        axisLeft={{
          tickValues: 4,
        }}
      />
    </div>
  );
};

export default Weekly;
