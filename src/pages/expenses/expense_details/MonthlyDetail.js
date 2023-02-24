import React, { forwardRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import { CustomBt } from "styles/AddEXpenseCss";
import MonthlyDetailCss from "styles/MonthlyDetailCss";
import ExpenseBox from "./expense/ExpenseBox";
import IncomeBox from "./income/IncomeBox";

const MonthlyDetail = () => {
  const [typeBt, setTypeBt] = useState(true);
  const [startDate, setStartDate] = useState(new Date());
  const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
    <button className="example-custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));
  return (
    <>
      <MonthlyDetailCss>
        <div className="flex mb-3">
          <DatePicker
            locale={ko}
            selected={startDate}
            dateFormat="yyyy년 MM월∨"
            showMonthYearPicker
            // readOnly
            todayButton="이달의 커피"
            // maxDate={new Date()}
            onChange={(date) => setStartDate(date)}
            customInput={<ExampleCustomInput />}
          />
          <div className="flex">
            <CustomBt
              className={`${typeBt ? "active" : ""}`}
              onClick={() => {
                setTypeBt(true);
              }}
            >
              지출
            </CustomBt>
            <CustomBt
              className={`${!typeBt ? "active" : ""}`}
              onClick={() => setTypeBt(false)}
            >
              수입
            </CustomBt>
          </div>
        </div>
        {typeBt ? (
          <ExpenseBox startDate={startDate} />
        ) : (
          <IncomeBox startDate={startDate} />
        )}
      </MonthlyDetailCss>
    </>
  );
};
export default MonthlyDetail;
