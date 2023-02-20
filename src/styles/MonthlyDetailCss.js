import styled from "@emotion/styled";

const MonthlyDetailCss = styled.div`
  .react-datepicker-wrapper {
    margin-bottom: 10px;
    button {
      background: transparent;
      font-size: 2.25rem /* 36px */;
      line-height: 2.5rem /* 40px */;
      color: #fff;
      text-shadow: -2px 0 black, 0 2px black, 1px 0 black, 0 -1px black;
    }
  }
  .react-datepicker__triangle {
    display: none;
  }
  .react-datepicker__month-text--keyboard-selected {
  }
`;

export default MonthlyDetailCss;
