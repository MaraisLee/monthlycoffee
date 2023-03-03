import moment from "moment";
import React, { useEffect, useState } from "react";
import { txtShadow } from "utils/colors";
import MyResponsivePie from "./MyResponsivePie";
import axios from "api/axios";
import { ResponsivePie } from "@nivo/pie";

const CategoryStats = () => {
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

  const countByCate = list.reduce((acc, { category }) => {
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const categoryRanking = Object.entries(countByCate)
    .sort((a, b) => b[1] - a[1])
    .map(([category, count]) => ({ id: category, value: count }));

  return (
    <div className="flex flex-col gap-3 justify-center items-center bg-[#F8F8E5] text-center p-5 border border-black md:row-span-2">
      <span
        className="text-xl font-semibold text-white"
        style={{ textShadow: `${txtShadow}` }}
      >
        이번 달 <br />
        메뉴별 지출
      </span>
      <div className="w-full h-[250px]">
        {categoryRanking.length > 0 ? (
          <ResponsivePie
            data={categoryRanking}
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
            colors={{ scheme: "pastel2" }}
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

export default CategoryStats;
