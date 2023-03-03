import React, { forwardRef, useEffect, useState } from "react";
import { txtShadow } from "utils/colors";
import moment from "moment";
import { ko } from "date-fns/esm/locale";
import DatePicker from "react-datepicker";
import MonthlyDetailCss from "styles/MonthlyDetailCss";
import axios from "api/axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescriptionBottle } from "@fortawesome/free-solid-svg-icons";

const TumblerCount = () => {
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

  const tumblerTrueCount = list.filter((item) => item.tumbler).length;

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
              텀블러 사용 횟수
            </span>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center gap-7">
          <span
            className="text-4xl text-center text-yellow-300"
            style={{ textShadow: `${txtShadow}` }}
          >
            {tumblerTrueCount}번
          </span>
          <span className="text-4xl text-green-700">
            <FontAwesomeIcon icon={faPrescriptionBottle} />
          </span>
        </div>
      </div>
    </MonthlyDetailCss>
  );
};

export default TumblerCount;
