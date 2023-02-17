import styled from "@emotion/styled";

const CalendarCss = styled.div`
  /* 일요일 날짜: 빨간색 */
  .fc-day-sun a {
    color: red;
  }
  /* 토요일 날짜: 파란색 */
  .fc-day-sat a {
    color: blue;
  }
`;

export default CalendarCss;
