import moment from "moment/moment";
import React from "react";
import { Calendar } from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import CalendarCss from "styles/CalendarCss";
import { txtShadow } from "utils/colors";

const Calender = () => {
  return (
    <CalendarCss>
      <div className="flex flex-col justify-center items-center gap-5 w-full p-5">
        <span
          className="text-white text-4xl font-bold"
          style={{ textShadow: `${txtShadow}` }}
        >
          이달의 커피
        </span>
        <div className="">
          <Calendar
            calendarType="US"
            locale="ko-KO"
            formatDay={(locale, date) => moment(date).format("D")}
          />
        </div>
      </div>
    </CalendarCss>
  );
};

export default Calender;
