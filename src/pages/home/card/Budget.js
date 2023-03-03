import React, { useEffect, useState } from "react";
import { txtShadow } from "utils/colors";
import axios from "api/axios";
import moment from "moment";

const Budget = () => {
  const [value, setValue] = useState(0);
  const [exp, setExp] = useState(0);
  const getPosts = async () => {
    const params = {
      startDate: moment(new Date()).format("YYMM"),
      endDate: moment(new Date()).format("YYMM"),
    };
    await axios
      .get("expenses/total", { params })
      .then((res) => {
        // console.log(res.data);
        const budget = 100000;
        setExp(res.data.totalExpense);
        const percent = Math.floor((res.data.totalExpense / budget) * 100);
        setValue(percent);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPosts();
  }, []);

  // console.log(`지출 금액은 예산의 ${percentage}% 입니다.`);

  // useEffect(() => {
  //   setValue(percent);
  // }, []);

  const [memo, setMemo] = useState("");
  const getPost = async () => {
    await axios
      .get("expenses/preference")
      .then((res) => setMemo(res.data.message))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPost();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center bg-[#F8F8E5] text-center p-10 border border-black md:row-span-3 space-y-3">
      <span
        className="text-2xl font-semibold text-white"
        style={{ textShadow: `${txtShadow}` }}
      >
        이번달 목표
      </span>
      <div
        className="progress-div"
        style={{
          width: "100%",
          backgroundColor: "rgb(233, 233, 233)",
          border: "1px solid #000",
          // borderRadius: "0.5rem",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            backgroundColor: "#F4CC4F",
            height: 25,
            // borderRadius: "0.5rem",
            transition: "1s ease",
          }}
          className="progress"
        />
      </div>
      <div className="flex justify-between w-full pb-5 font-bold">
        <span
          className="text-yellow-300 text-lg md:text-2xl"
          style={{ textShadow: `${txtShadow}` }}
        >{`${value}%`}</span>
        <span>{`${exp}/100,000`}</span>
      </div>
      <div className="mt-20 text-lg text-[#272e56] font-semibold drop-shadow-sm">
        "{memo}"
      </div>
    </div>
  );
};

export default Budget;
