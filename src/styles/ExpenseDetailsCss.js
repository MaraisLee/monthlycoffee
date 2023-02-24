import styled from "@emotion/styled";

const ExpenseDetailsCss = styled.div`
  .expenseDetail::-webkit-scrollbar {
    width: 8px;
    height: 5px;
    background-color: #eee;
    -moz-border-radius: 0px;
    -webkit-border-radius: 0px;
    border-radius: 0px;
  }

  .expenseDetail::-webkit-scrollbar-thumb {
    background-color: #8da0b1;
    -moz-border-radius: 2px;
    -webkit-border-radius: 2px;
    border-radius: 2px;
  }
`;

export default ExpenseDetailsCss;
