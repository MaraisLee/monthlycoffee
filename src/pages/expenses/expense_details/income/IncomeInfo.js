import React from "react";
import axios from "api/axios";
import { Close, Edit } from "@mui/icons-material";

const IncomeInfo = ({ item, updateBt, setUpdateBt, editIn, setEditIn }) => {
  const price = [item.amount].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const deleteIncome = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      axios
        .delete(`incomes/${item.id}`)
        .then((res) => {
          console.log(res);
          setUpdateBt(++updateBt);
          alert("삭제되었습니다.");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="relative px-20 h-[7vh] bg-white border border-black">
      <div className="flex h-full items-center">
        <span className="text-lg flex-1">{item.date}</span>
        <div className="flex flex-col flex-1 items-center text-2xl font-bold">
          {item.note}
        </div>
        <span className="flex-1 text-xl font-bold text-green-700 text-end">
          {price}원
        </span>
        <div className="flex flex-col gap-1 py-3 h-[7vh] absolute right-3">
          <span className="text-red-800 cursor-pointer" onClick={deleteIncome}>
            <Close />
          </span>
          <span
            className="cursor-pointer"
            onClick={() => {
              setEditIn(true);
            }}
          >
            <Edit />
          </span>
        </div>
      </div>
    </div>
  );
};

export default IncomeInfo;
