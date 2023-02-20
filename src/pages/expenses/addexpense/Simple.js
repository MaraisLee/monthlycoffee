import React, { useState } from "react";
import { Card, CardContent, Switch, Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { txtShadow, yellowcolor } from "utils/colors";
import SwiperBrand from "./SwiperBrand";
import SwiperCategory from "./SwiperCategory";
import { GreenBt } from "utils/basicCss";
import { useNavigate } from "react-router-dom";

const Simple = ({ num, setNum }) => {
  const navigate = useNavigate();
  const MAX_LIMIT = 10000000;

  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("등록이 완료되었습니다.");
    navigate("/expense");
  };

  // defaultValue 오늘 나오게
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);

  return (
    <>
      <Card variant="outlined" className="p-10">
        <div className="flex justify-between mb-8">
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
          <input type="date" defaultValue={today} />
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
