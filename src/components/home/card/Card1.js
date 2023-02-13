import { ResponsiveBar } from "@nivo/bar";
import React from "react";

const Card1 = () => {
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
    <div className="bg-green-100 text-green-500 text-center p-10 rounded-lg row-span-2 col-span-2">
      <span className="text-xl">Weeekly Coffee</span>
      <ResponsiveBar
        height={300}
        data={data}
        keys={["v"]}
        maxValue={15000}
        padding={0.3}
        margin={{
          top: 10,
          right: 10,
          bottom: 36,
          left: 36,
        }}
        indexBy="x"
        enableLabel={false}
        borderRadius={2}
        axisLeft={{
          tickValues: 7,
        }}
      />
    </div>
  );
};

export default Card1;
