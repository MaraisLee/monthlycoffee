import React, { useState } from "react";
// 입력 컴포넌트
import Detail from "./Detail";
import Simple from "./Simple";
// css
import { VioletBt } from "styles/AddEXpenseCss";

const AddExpense = () => {
  const [num, setNum] = useState(0);
  const [btClick, setBtClick] = useState(true);

  return (
    <>
      <div className="py-10 md:w-4/5 w-full">
        <div className="flex">
          <VioletBt
            className={`${btClick ? "active" : ""}`}
            onClick={() => {
              setBtClick(true);
            }}
          >
            간편 입력
          </VioletBt>
          <VioletBt
            className={`${!btClick ? "active" : ""}`}
            onClick={() => setBtClick(false)}
          >
            상세 입력
          </VioletBt>
        </div>
        <div className="flex flex-col">
          {btClick ? (
            <>
              {/* 간편입력 */}
              <Simple num={num} setNum={setNum} />
            </>
          ) : (
            <>
              {/* 상세입력 */}
              <Detail num={num} setNum={setNum} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AddExpense;
