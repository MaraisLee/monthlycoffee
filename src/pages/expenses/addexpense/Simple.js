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
import SwiperBrand from "./SwiperBrand";
import SwiperCategory from "./SwiperCategory";
import { GreenBt } from "utils/basicCss";
import { useNavigate } from "react-router-dom";
import axios from "api/axios";
import { getCookie } from "api/cookie";

const Simple = () => {
  const navigate = useNavigate();
  const MAX_LIMIT = 10000000;

  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [payment, setPayment] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // 천의자리 없애기
    const priceRaw = price.split(",").join("");
    const body = {
      payment: payment,
      date: date,
      price: priceRaw,
      category: category,
      brand: brand,
    };

    console.log("정보", body);
    axios
      .post("expenses", body, {
        headers: { Authorization: getCookie("access_token") },
      })
      .then((res) => {
        console.log(res);
        const errResponseData = res.status;
        console.log(errResponseData);
        alert("지출이 입력되었습니다.");
        navigate("/expense");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // defaultValue 오늘 나오게
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);
  const [date, setDate] = useState(today);

  return (
    <>
      <Card variant="outlined" className="p-10">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Payment
          </InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Payment"
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
          >
            <MenuItem value={0}>카드</MenuItem>
            <MenuItem value={1}>현금</MenuItem>
          </Select>
        </FormControl>
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
              sx={{
                textShadow: `${txtShadow}`,
                color: "white",
                paddingRight: 20,
              }}
            >
              ￦{" "}
            </Typography>
            <NumericFormat
              component="input"
              className="text-5xl outline-none text-center mr-10 md:text-right "
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
            component="div"
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
            component="div"
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
