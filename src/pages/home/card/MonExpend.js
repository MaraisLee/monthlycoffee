import { Paid } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { txtShadow } from "utils/colors";
import axios from "api/axios";
import moment from "moment";

const MonExpend = () => {
  const [monExp, setMonExp] = useState("");
  const getPosts = async () => {
    const params = {
      startDate: moment(new Date()).format("YYMM"),
      endDate: moment(new Date()).format("YYMM"),
    };
    await axios
      .get("expenses/total", { params })
      .then((res) => {
        // console.log(res.data);
        setMonExp(
          [res.data.totalExpense]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        );
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPosts();
  }, []);
  // console.log(monExp);
  return (
    <div className="flex gap-10 justify-center items-center bg-[#F8F8E5] p-10 border border-black md:row-span-1">
      <div className="flex flex-col items-center gap-2">
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
          {monExp}원
        </span>
      </div>
      <span className="text-[#7A605B]">
        <Paid style={{ fontSize: "55" }} />
      </span>
    </div>
  );
};

export default MonExpend;
