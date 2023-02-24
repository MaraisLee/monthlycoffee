import { Close } from "@mui/icons-material";
import React from "react";
import axios from "api/axios";

const IncomeList = ({ item, setModalIsOpen }) => {
  const deleteIncome = () => {
    if (alert("삭제하시겠습니까?")) {
      axios
        .delete(`incomes/${item.id}`)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="relative px-24 h-[13vh] bg-white border border-black">
      <div className="flex h-full justify-between items-center">
        <span className="text-xl">{item.date}</span>
        <div className="flex flex-col items-center">
          <span className="text-3xl">{item.note}</span>
        </div>
        <span className="text-3xl text-green-700">{item.amount}원</span>
        <span
          className="absolute right-3 top-3 text-red-800"
          onClick={deleteIncome}
        >
          <Close />
        </span>
      </div>
    </div>
  );
};

export default IncomeList;
