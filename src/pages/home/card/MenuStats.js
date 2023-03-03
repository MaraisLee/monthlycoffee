import moment from "moment";
import React, { useEffect, useState } from "react";
import { txtShadow } from "utils/colors";
import axios from "api/axios";
import { ResponsivePie } from "@nivo/pie";

const MenuStats = () => {
  const [list, setList] = useState([]);
  const getPosts = async () => {
    // console.log(startDate);
    const params = {
      date: moment(new Date()).format("YYMM"),
    };
    const posts = await axios.get("expenses", { params });
    // console.log(moment(new Date()).format("YYMM"));
    setList(posts.data);
  };
  useEffect(() => {
    getPosts();
  }, []);

  const countByBrand = list.reduce((acc, { brand }) => {
    acc[brand] = (acc[brand] || 0) + 1;
    return acc;
  }, {});

  const brandRanking = Object.entries(countByBrand)
    .sort((a, b) => b[1] - a[1])
    .map(([brand, count]) => ({ id: brand, value: count }));

  // console.log(brandRanking);

  return (
    <div className="flex flex-col gap-3 justify-center items-center bg-[#F8F8E5] text-center p-5 border border-black md:row-span-2">
      <span
        className="text-xl font-semibold text-white"
        style={{ textShadow: `${txtShadow}` }}
      >
        이번 달
        <br />
        브랜드별 지출
      </span>
      <div className="w-full h-[250px]">
        {brandRanking.length > 0 ? (
          <ResponsivePie
            data={brandRanking}
            theme={{
              fontSize: 16, // 텍스트 크기 설정
            }}
            margin={{ top: 20, right: 45, bottom: 20, left: 45 }}
            innerRadius={0}
            activeOuterRadiusOffset={8}
            padAngle={0.7}
            arcLinkLabelsDiagonalLength={6}
            arcLinkLabelsStraightLength={7}
            cornerRadius={3}
            colors={{ scheme: "pastel1" }}
            borderWidth={1}
            borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
            enableRadialLabels={false}
            enableSlicesLabels={false}
          />
        ) : (
          <span className="text-red-800 text-3xl font-bold">
            데이터가 없습니다.
          </span>
        )}
      </div>
    </div>
  );
};

export default MenuStats;
