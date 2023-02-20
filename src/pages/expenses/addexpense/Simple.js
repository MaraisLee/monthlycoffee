import React, { useState } from "react";
import { Card, CardContent, Switch, Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { txtShadow, yellowcolor } from "utils/colors";
import SwiperBrand from "./SwiperBrand";
import SwiperCategory from "./SwiperCategory";
import { GreenBt } from "utils/basicCss";
import { useNavigate } from "react-router-dom";
import axios from "api/axios";
import { useSelector } from "react-redux";

const Simple = ({ num, setNum }) => {
  const userNo = useSelector((state) => state.user.id);
  const navigate = useNavigate();
  const MAX_LIMIT = 10000000;

  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  // const handleChange = (e) => {
  //   setDate(e.target.value);
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      data: {
        category: category,
        brand: brand,
        price: price,
      },
    };

    console.log("정보", body);
    // .post("api/expenses?userNo=0" + userNo, body)
    axios
      .post("expenses?userNo=2", body)
      .then((res) => {
        console.log(res);
        alert("지출이 입력되었습니다.");
      })
      .catch((err) => console.log(err));
    console.log("데이터", e);
    console.log(brand);
    console.log(category);
    console.log(price);
    console.log(date);
    // alert("등록이 완료되었습니다.");
    // navigate("/expense");
  };

  // defaultValue 오늘 나오게
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  const [date, setDate] = useState(today);

  return (
    <>
      <Card variant="outlined" className="p-10">
        <div className="flex justify-between mb-2">
          <div>
            카드
            <Switch checked={true} color="warning" size="lg" />
            현금
          </div>
          <div>
            수입
            <Switch checked={true} color="secondary" size="lg" />
            지출
          </div>
        </div>
        <CardContent component="form" onSubmit={handleSubmit}>
          <input
            type="date"
            defaultValue={today}
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
              thousandSeparator=","
              isAllowed={(values) => {
                const { floatValue } = values;
                return floatValue < MAX_LIMIT;
              }}
            />
          </div>
          <Typography
            sx={{
              py: 2,
              my: 5,
              fontSize: 20,
              borderTop: "1px solid #bbb",
            }}
          >
            Category
            <SwiperCategory category={category} setCategory={setCategory} />
          </Typography>
          <Typography
            sx={{
              pt: 2,
              fontSize: 20,
              borderTop: "1px solid #bbb",
            }}
          >
            Brand
            <SwiperBrand brand={brand} setBrand={setBrand} />
          </Typography>
          <GreenBt
            type="submit"
            style={{ alignSelf: "flex-end", marginTop: 40 }}
          >
            등록
          </GreenBt>
        </CardContent>
      </Card>
    </>
  );
};

export default Simple;
