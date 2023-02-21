import React, { forwardRef, useState } from "react";
import { useSelector } from "react-redux";
import { txtShadow } from "utils/colors";
import ExpDetailModal from "./ExpDetailModal";
import ExpenseList from "./ExpenseList";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import MonthlyDetailCss from "styles/MonthlyDetailCss";
import moment from "moment";
const MonthlyDetail = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [listId, setListId] = useState("");
  // const [list, setList] = useState([]);
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
  ];
  const userData = useSelector((state) => state.user);
  // const getPosts = async () => {
  //   const posts = await axios.get(
  //     // `http://192.168.0.203:8080/api/expenses/${userData.id}?date=2302`
  //     `http://192.168.0.203:8080/api/expenses/0?date=2302`
  //   );
  //   console.log(posts)
  //   // setList(posts);
  // };
  // useEffect(() => {
  //   getPosts();
  // }, []);
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  // console.log(moment(startDate).format("YYMM"));
  // console.log(listId);
  const clickData = dummy.filter((item) => item.id === listId);
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
            maxDate={new Date()}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
          />
        </div>
        <div className="space-y-5">
          {dummy.map((item) => {
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
