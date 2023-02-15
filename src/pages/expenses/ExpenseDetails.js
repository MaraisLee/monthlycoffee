import React from "react";
import { txtShadow } from "utils/colors";

const ExpenseDetails = () => {
  return (
    <div className="p-5">
      <span
        className="text-4xl font-bold"
        style={{ textShadow: `${txtShadow}` }}
      >
        <span className="text-yellow-400">이달의 커피</span>
      </span>
      <div className="bg-[#F5E7DB] block w-[94vw] md:w-[75vw] overflow-y-scroll p-10 mt-5 space-y-5 rounded-lg">
        <span
          className="text-4xl text-white"
          style={{ textShadow: `${txtShadow}` }}
        >
          2월 내역
        </span>
        <div className="flex justify-between items-center px-24 h-[13vh] bg-white border border-black">
          <span className="text-xl">2023/02/14</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl">까페라떼</span>
            <span>스타벅스</span>
          </div>
          <span className="text-3xl text-red-700">5000원</span>
        </div>
        <div className="flex justify-between items-center px-24 h-[13vh] bg-white border border-black">
          <span className="text-xl">2023/02/13</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl">원조커피</span>
            <span>빽다방</span>
          </div>
          <span className="text-3xl text-red-700">2500원</span>
        </div>
        <div className="flex justify-between items-center px-24 h-[13vh] bg-white border border-black">
          <span className="text-xl">2023/02/14</span>
          <div className="flex flex-col items-center">
            <span className="text-3xl">용돈</span>
          </div>
          <span className="text-3xl text-green-500">10000원</span>
        </div>
      </div>
    </div>
  );
};

export default ExpenseDetails;
