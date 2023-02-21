import React from "react";

const ExpenseList = ({ item, setModalIsOpen }) => {
  return (
    <div
      className="flex justify-between items-center px-24 h-[13vh] bg-white border border-black"
      onClick={() => setModalIsOpen(true)}
    >
      <span className="text-xl">{item.date}</span>
      <div className="flex flex-col items-center">
        <span className="text-3xl">{item.category}</span>
        <span>{item.brand}</span>
      </div>
      <span className="text-3xl text-red-700">{item.price}원</span>
    </div>
  );
};

export default ExpenseList;
