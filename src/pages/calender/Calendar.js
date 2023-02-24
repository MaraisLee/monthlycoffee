import "react-calendar/dist/Calendar.css";
// 날짜 관련 라이브러리
import moment from "moment/moment";
// 한글로 출력하게 해줌
import "moment/locale/ko";
import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import axios from "api/axios";
import { CalendarDiv, CalenderDetail } from "styles/CalendarCss";
import { list } from "postcss";

const Calender = () => {
  // 선택된 날짜
  const [date, setDate] = useState(new Date());
  // 이미지 출력
  const publicFolder = process.env.PUBLIC_URL;
  // 정보 호출
  // const getPosts = async () => {
  //   const params = {
  //     date: moment(date).format("YYMM"),
  //   };
  //   const posts = await axios
  //     .get("incomes/list", { params })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  //   console.log(moment(date).format("YYMM"));
  //   console.log(posts);
  //   // setLists(posts.data);
  // };
  const [lists, setLists] = useState([]);
  // 지출 정보 호출
  const getPosts = async () => {
    const params = {
      date: moment(date).format("YYMM"),
    };
    const posts = await axios.get("expenses", { params });
    // console.log(moment(date).format("YYMM"));
    // console.log(posts);
    setLists(posts.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  // console.log("??", lists);
  // console.log("mm", date);
  const [filteredList, setFilteredList] = useState([]);
  const find = lists.filter((item, index) => {
    // 현재 date와 starBucks는 포맷이 다르다.
    // console.log("아이템", item.price);
    if (item.date === moment(date).format("YYYY-MM-DD")) {
      return item;
    }
  });
  console.log("find:", find);

  return (
    <CalendarDiv>
      <Calendar
        // 일요일부터 출력
        calendarType="US"
        // 날짜 선택시 날짜변경
        onChange={setDate}
        // 달력에 출력될 html작성
        tileContent={({ date, view }) => {
          let html = []; //업데이트 가능 (let)
          // 각각의 날짜 영역에 출력하고 싶은 내용을 작성한다.
          if (
            lists.find((item, index) => {
              // 현재 date와 starBucks는 포맷이 다르다.
              // console.log("아이템", item.price);
              return item.date === moment(date).format("YYYY-MM-DD");
            })
          ) {
            // 조건에 맞으므로 html을 생성해 준다.
            html.push(
              <div>
                <img
                  key={`list_${moment(date)}}`}
                  src={`${publicFolder}/images/logo.png`}
                  alt="아이콘"
                  style={{ width: 20, height: 20 }}
                />
                {/* {find[0].price} */}
              </div>
            );
          }
          return <div>{html}</div>;
        }}
      />
      {/* 상세 정보 내역 출력 */}
      <CalenderDetail>
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
      </CalenderDetail>
    </CalendarDiv>
  );
};

export default Calender;
