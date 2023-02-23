import React, { forwardRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { txtShadow } from "utils/colors";
import ExpDetailModal from "./ExpDetailModal";
import ExpenseList from "./ExpenseList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import MonthlyDetailCss from "styles/MonthlyDetailCss";
import moment from "moment";
import axios from "api/axios";
const MonthlyDetail = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [listId, setListId] = useState("");
  const [list, setList] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
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
      category: "까페라떼",
      brand: "빽다방",
      price: 5000,
      memo: "괜찮음",
      tumbler: false,
      taste: "SWEET",
      mood: "WORK",
      bean: "BRAZIL",
      likeHate: "SOSO",
      payment: 1,
      date: "2023-02-13",
      images: [
        {
          id: 1,
          filename: "coffee_1676432744505.jpg",
        },
      ],
    },
  ];
  // const userData = useSelector((state) => state.user);
  // const getPosts = async () => {
  //   const params = {
  //     date: moment(startDate).format("YYMM"),
  //   };
  //   const posts = await axios.get("expenses", { params });
  //   console.log(posts);
  //   setList(posts.data);
  // };
  // useEffect(() => {
  //   getPosts();
  // }, [startDate]);
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  // console.log(moment(startDate).format("YYMM"));
  // console.log(listId);
  const clickData = dummy.filter((item) => item.id === listId);
  // const clickData = list.filter((item) => item.id === listId);
  console.log(clickData);
  return (
    <>
      <MonthlyDetailCss>
        <div className="flex">
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
        </div>
        <div className="space-y-5">
          {dummy.map((item) => {
          {/* {list.map((item) => { */}
            return (
              <ExpenseList
                key={item.id}
                item={item}
                setModalIsOpen={setModalIsOpen}
                setListId={setListId}
              />
            );
          })}
        </div>
        <ExpDetailModal
          clickData={clickData}
          modalIsOpen={modalIsOpen}
          setModalIsOpen={setModalIsOpen}
        />
      </MonthlyDetailCss>
    </>
  );
};
export default MonthlyDetail;
