import "react-calendar/dist/Calendar.css";
// 날짜 관련 라이브러리
import moment from "moment/moment";
// 한글로 출력하게 해줌
import "moment/locale/ko";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import axios from "api/axios";
import { CalendarDiv, CalenderDetail } from "styles/CalendarCss";

const Calender = () => {
  // 선택된 날짜
  const [date, setDate] = useState(new Date());
  // 이미지 출력
  const publicFolder = process.env.PUBLIC_URL;
  // 정보 호출
  const [lists, setLists] = useState([]);
  const [incomLists, setIncomLists] = useState([]);
  const getPosts = async () => {
    const params = {
      date: moment(date).format("YYMM"),
    };
    const posts = await axios.get("incomes/list", { params });

    const expenses = posts.data.map((item, index) => {
      return item.expense;
    });
    setLists(expenses[0]);

    const incomes = posts.data.map((item, index) => {
      return item.income;
    });
    console.log(incomes[0]);
    setIncomLists(incomes[0]);
  };
  console.log(incomLists);

  useEffect(() => {
    getPosts();
  }, []);

  const tile = ({ date, view }) => {
    let html = []; //업데이트 가능 (let)
    // 각각의 날짜 영역에 출력하고 싶은 내용을 작성한다.

    const findData = lists.find((item, index) => {
      return item.date === moment(date).format("YYYY-MM-DD");
    });

    const findIncomeData = incomLists.find((item, index) => {
      return item.date === moment(date).format("YYYY-MM-DD");
    });

    if (findData) {
      html.push(
        <div className="flex justify-center items-center">
          <img
            key={`list_${moment(date)}}`}
            src={`${publicFolder}/images/logo.png`}
            alt="아이콘"
            style={{ width: 20, height: 20 }}
          />
          <span className="text-sm text-red-800 font-bold">
            {findData.price}
          </span>
        </div>
      );
    }
    if (findIncomeData) {
      html.push(
        <div className="flex justify-center items-center">
          <span className="text-sm text-green-700  font-bold text-right">
            {findIncomeData.amount}
          </span>
        </div>
      );
    }

    return <div>{html}</div>;
  };

  return (
    <CalendarDiv>
      <Calendar
        // 일요일부터 출력
        calendarType="US"
        // 날짜 선택시 날짜변경
        onChange={setDate}
        // 달력에 출력될 html작성
        tileContent={tile}
      />
      {/* 상세 정보 내역 출력 */}
      {/* <CalenderDetail>
        <div className="calender-detail">
          {lists && (
            <div className="calender-detail__item">
              <div className="calender-detail__title">Coffee Day</div>
              <div className="calender-detail__date-wrap">
                {lists.map((item, index) => item.title)}
              </div>
            </div>
          )}
        </div>
        <div>{moment(date).format("YYYY년 MM월 DD일")}</div>
        <div> {lists.map((item, index) => item.title)}</div>
      </CalenderDetail> */}
    </CalendarDiv>
  );
};

export default Calender;
