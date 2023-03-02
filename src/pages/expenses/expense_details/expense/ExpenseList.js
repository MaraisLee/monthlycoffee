import { Close } from "@mui/icons-material";
import React from "react";
import axios from "api/axios";

const ExpenseList = ({
  item,
  setModalIsOpen,
  setListId,
  updateBt,
  setUpdateBt,
}) => {
  const price = [item.price].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const deleteExpense = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      axios
        .delete(`expenses/${item.id}`)
        .then((res) => {
          console.log(res);
          setUpdateBt(++updateBt);
          alert("삭제되었습니다.");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="relative px-20 h-[7vh] bg-white border border-black cursor-pointer">
      <div
        className="flex h-full items-center"
        onClick={() => {
          setModalIsOpen(true);
          setListId(item.id);
        }}
      >
        <span className="text-lg flex-1">{item.date}</span>
        <div className="flex flex-1 gap-5 items-center">
          <span className="text-2xl font-bold">{item.category}</span>
          <span>{item.brand}</span>
        </div>
        <div className="text-xl flex-1 text-end text-red-700 font-bold">
          {price}원
        </div>
      </div>
      <span
        className="absolute right-3 top-3 text-red-800 z-99 cursor-point"
        onClick={deleteExpense}
      >
        <Close />
      </span>
    </div>
  );
};

export default ExpenseList;
