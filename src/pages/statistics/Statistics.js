import Budget from "pages/home/card/Budget";
import { txtShadow } from "utils/colors";
import MonExpend from "pages/home/card/MonExpend";
import Weekly from "pages/home/card/Weekly";
import React from "react";
import { useSelector } from "react-redux";
import ExpCategoryStats from "./ExpCategoryStats";
import ExpMenuStats from "./ExpMenuStats";
import ExpenseDetailsCss from "styles/ExpenseDetailsCss";

const Statistics = () => {
  const userData = useSelector((state) => state.user);
  return (
    <ExpenseDetailsCss>
      <div className="my-7 mx-auto">
        <p
          className="text-4xl font-bold text-white"
          style={{ textShadow: `${txtShadow}` }}
        >
          <span className="text-yellow-300">{userData.nickname} </span>
          님의 통계
        </p>
        <div className="expenseDetail bg-[#F5E7DB] block w-[94vw] md:w-[60vw] p-10 mt-5 space-y-5 rounded-lg md:h-[70vh] md:overflow-y-scroll">
          <Budget />
          <MonExpend />
          {/* <Weekly /> */}
          <ExpCategoryStats />
          <ExpMenuStats />
        </div>
      </div>
    </ExpenseDetailsCss>
  );
};

export default Statistics;
