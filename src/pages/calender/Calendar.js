import moment from "moment/moment";
import React from "react";
import { Calendar } from "react-calendar";
// import "react-calendar/dist/Calendar.css";
import CalendarCss from "styles/CalendarCss";
import { txtShadow } from "utils/colors";

const Calender = () => {
  const dummy = [
    {
      id: 1,
      category: "아메리카노",
      brand: "스타벅스",
      price: 4500,
      memo: "맛있다",
      tumbler: false,
      taste: "SWEET",
      mood: "WORK",
      bean: "BRAZIL",
      likeHate: "LIKE",
      payment: 0,
      date: "2023-02-15",
      images: [
        {
          id: 1,
          filename: "coffee_1676432744505.jpg",
        },
      ],
    },
    {
      id: 2,
      category: "아메리카노",
      brand: "스타벅스",
      price: 4500,
      memo: "맛있다",
      tumbler: false,
      taste: "SWEET",
      mood: "WORK",
      bean: "BRAZIL",
      likeHate: "LIKE",
      payment: 0,
      date: "2023-02-13",
      images: [
        {
          id: 1,
          filename: "coffee_1676432744505.jpg",
        },
      ],
    },
    {
      id: 3,
      category: "아메리카노",
      brand: "스타벅스",
      price: 4500,
      memo: "맛있다",
      tumbler: false,
      taste: "SWEET",
      mood: "WORK",
      bean: "BRAZIL",
      likeHate: "LIKE",
      payment: 0,
      date: "2023-02-06",
      images: [
        {
          id: 1,
          filename: "coffee_1676432744505.jpg",
        },
      ],
    },
  ];
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
