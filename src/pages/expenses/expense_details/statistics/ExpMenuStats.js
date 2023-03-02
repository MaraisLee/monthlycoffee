import moment from "moment";
import React, { forwardRef, useEffect, useState } from "react";
import { txtShadow } from "utils/colors";
import axios from "api/axios";
import { ResponsivePie } from "@nivo/pie";
import { ko } from "date-fns/esm/locale";
import DatePicker from "react-datepicker";
import MonthlyDetailCss from "styles/MonthlyDetailCss";

const ExpMenuStats = () => {
  const [list, setList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  const getPosts = async () => {
    // console.log(startDate);
    const params = {
      date: moment(startDate).format("YYMM"),
    };
    const posts = await axios.get("expenses", { params });
    setList(posts.data);
  };
  useEffect(() => {
    getPosts();
  }, [startDate]);

  const countByBrand = list.reduce((acc, { brand }) => {
    acc[brand] = (acc[brand] || 0) + 1;
    return acc;
  }, {});

  const brandRanking = Object.entries(countByBrand)
    .sort((a, b) => b[1] - a[1])
    .map(([brand, count]) => ({ id: brand, value: count }));

  console.log(brandRanking);

  return (
    <MonthlyDetailCss>
      <div className="flex justify-between items-center bg-[#F8F8E5] text-center p-5 border border-black md:row-span-2">
        <div className="w-1/2">
          <DatePicker
            locale={ko}
            selected={startDate}
            dateFormat="yyyy년 MM월∨"
            showMonthYearPicker
            // readOnly
            todayButton="이달의 커피"
            // maxDate={new Date()}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
          />
          <span
            className="text-2xl font-semibold text-white"
            style={{ textShadow: `${txtShadow}` }}
          >
            메뉴별 지출
          </span>
        </div>
        <div className="flex justify-center items-center w-1/2 h-[250px]">
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
            <span className="text-red-800 text-3xl font-bold">데이터가 없습니다.</span>
          )}
        </div>
      </div>
    </MonthlyDetailCss>
  );
};

export default ExpMenuStats;
