import React from "react";
import moment from "moment";
import { txtShadow } from "utils/colors";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import HomeCalendarCss from "styles/HomeCalendarCss";

const Monthly = () => {
  return (
      <div className="flex items-center bg-[#F8F8E5] text-center border border-black md:col-span-2 md:row-span-3">
        <div className="flex flex-col justify-center items-center gap-5 w-full">
          <span
            className="text-white text-4xl font-bold"
            style={{ textShadow: `${txtShadow}` }}
          >
            이달의 커피
          </span>
          <div className="h-full">
            <Calendar
              calendarType="US"
              locale="ko-KO"
              formatDay={(locale, date) => moment(date).format("D")}
            />
          </div>
        </div>
      </div>
  );
};

export default Monthly;
