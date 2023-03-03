import { Paid } from "@mui/icons-material";
import React, { forwardRef, useEffect, useState } from "react";
import { txtShadow } from "utils/colors";
import axios from "api/axios";
import moment from "moment";
import { ko } from "date-fns/esm/locale";
import DatePicker from "react-datepicker";
import MonthlyDetailCss from "styles/MonthlyDetailCss";

const ExpMonExpend = () => {
  const [monExp, setMonExp] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  const getPosts = async () => {
    const params = {
      startDate: moment(startDate).format("YYMM"),
      endDate: moment(startDate).format("YYMM"),
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
  }, [startDate]);
  // console.log(monExp);
  return (
    <MonthlyDetailCss>
      <div className="flex justify-between items-center bg-[#F8F8E5] px-5 py-12 border border-black md:row-span-1">
        <div className="w-1/2 flex justify-center items-center gap-2">
          <div className="flex flex-col items-center">
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
              className="text-xl font-semibold text-white"
              style={{ textShadow: `${txtShadow}` }}
            >
              총 지출
            </span>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center gap-5">
          <span
            className="text-4xl text-center text-yellow-300"
            style={{ textShadow: `${txtShadow}` }}
          >
            {monExp}원
          </span>
          <span className="text-[#7A605B]">
            <Paid style={{ fontSize: "55" }} />
          </span>
        </div>
      </div>
    </MonthlyDetailCss>
  );
};

export default ExpMonExpend;
