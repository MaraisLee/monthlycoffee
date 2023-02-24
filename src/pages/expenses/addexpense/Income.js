import React, { useState } from "react";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { NumericFormat } from "react-number-format";
import { txtShadow, yellowcolor } from "utils/colors";
import { GreenBt } from "utils/basicCss";
import { useNavigate } from "react-router-dom";
import axios from "api/axios";
import { InputDiv } from "styles/AddEXpenseCss";

const Income = ({ num, setNum }) => {
  const navigate = useNavigate();
  const MAX_LIMIT = 10000000;
  const [price, setPrice] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      amount: price,
      note: note,
      date: date,
    };

    console.log("정보", body);
    axios
      .post("incomes", body)
      .then((res) => {
        console.log(res);
        alert("등록이 완료되었습니다..");
      })
      .catch((err) => console.log(err));

    // navigate("/expense");
  };

  // defaultValue 오늘 나오게
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  const [date, setDate] = useState(today);

  return (
    <>
      <Card variant="outlined" className="p-10 mt-5">
        <CardContent component="form" onSubmit={handleSubmit}>
          <input
            type="date"
            className="cursor-pointer pb-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div className="flex justify-between px-6">
            <Typography
              variant="h2"
              component="div"
              sx={{ textShadow: `${txtShadow}`, color: "white" }}
            >
              ￦{" "}
            </Typography>
            <NumericFormat
              component="input"
              className="text-5xl outline-none text-right"
              style={{ textShadow: `${txtShadow}`, color: `${yellowcolor}` }}
              name="price"
              value={price}
              type="text"
              maxLength="8"
              placeholder="0"
              onChange={(e) => setPrice(e.target.value)}
              // thousandSeparator=","
              isAllowed={(values) => {
                const { floatValue } = values;
                return floatValue < MAX_LIMIT;
              }}
            />
          </div>
          <InputDiv>
            <textarea
              cols="30"
              rows="3"
              placeholder="내용을 입력해주세요."
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </InputDiv>
          <GreenBt type="submit" style={{ textAlign: "", marginTop: 40 }}>
            등록
          </GreenBt>
        </CardContent>
      </Card>
    </>
  );
};

export default Income;
