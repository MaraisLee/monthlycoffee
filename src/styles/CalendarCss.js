import styled from "@emotion/styled";

export const CalendarDiv = styled.div`
  .react-calendar {
    margin: 40px auto;
    width: 80%;
    background-color: #fff;
    color: #222;
    border-radius: 8px;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.125em;

  .react-calendar__navigation {
    color: #d4a713;
    min-width: 44px;
    background: none;
    font-size: 20px;
    margin-top: 30px;
    padding-bottom: 30px;
    button{
      display:block;
      height: 30px;
    }
  }

  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #f8f8fa;
  }
  .react-calendar__navigation button[disabled] {
    background-color: #f0f0f0;
  }
  abbr[title] {
    text-decoration: none;
  }

  /* .react-calendar__month-view__days__day--weekend {
    color: #d10000;
   } */

  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background: #f8f8fa;

    border-radius: 6px;
  }
  // 오늘날짜
  .react-calendar__tile--now {
    background: #d4a71333;
    border-radius: 6px;
    color: black;
  }

  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #d4a71333;
    border-radius: 6px;
    font-weight: bold;
  }

  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #50da7e;
  }

  .react-calendar__tile--active {
    background: #50da7e;
    color: black;
  }

  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    border: 2px solid black;
    background: #50da7e;
  }

  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f8f8fa;
  }

  .react-calendar__tile--range {
    background: #f8f8fa;

    border-radius: 0;
  }

  .react-calendar__tile--rangeStart {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px;
    background: #d4a713;
  }

  .react-calendar__tile--rangeEnd {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    background: #d4a713;
  }
`;
