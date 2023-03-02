import React, { useState } from "react";
import { useSelector } from "react-redux";
import ExpenseDetailsCss from "styles/ExpenseDetailsCss";
import { txtShadow } from "utils/colors";
import MonthlyDetail from "./MonthlyDetail";
import Statistics from "./statistics/Statistics";

const ExpenseDetails = () => {
  const [page, setPage] = useState(true);
  const userData = useSelector((state) => state.user);

  return (
    <ExpenseDetailsCss>
      <div className="p-5">
        <div className="inline-flex rounded-lg border border-gray-100 bg-gray-100 p-1">
          <button
            className={`inline-block px-4 py-2 text-3xl font-bold ${
              page
                ? "text-yellow-400 rounded-md bg-white shadow-sm"
                : "text-white hover:text-gray-100"
            }`}
            style={{ textShadow: `${txtShadow}` }}
            onClick={() => setPage(true)}
          >
            {userData.nickname} 님의 커피
          </button>
          <button
            className={`inline-block rounded-md px-4 py-2 text-3xl font-bold ${
              !page
                ? "text-yellow-400 rounded-md bg-white shadow-sm"
                : "text-white hover:text-gray-100"
            }`}
            style={{ textShadow: `${txtShadow}` }}
            onClick={() => setPage(false)}
          >
            통계
          </button>
        </div>
        <div className="expenseDetail bg-[#F5E7DB] block w-[94vw] md:w-[60vw] p-10 mt-5 space-y-5 rounded-lg md:h-[70vh] md:overflow-y-scroll">
          {page ? <MonthlyDetail /> : <Statistics />}
        </div>
      </div>
    </ExpenseDetailsCss>
  );
};

export default ExpenseDetails;
