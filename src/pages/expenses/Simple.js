import React from "react";
import { Card, CardContent, Switch, Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";
import { txtShadow, yellowcolor } from "utils/colors";
import SwiperBrand from "./SwiperBrand";
import SwiperCategory from "./SwiperCategory";

import { useForm } from "react-hook-form";

const Simple = ({ num, setNum }) => {
  const {
    register,
    handleSubmit,
    reset,
    // 폼이 아니라 강제로 값을 셋팅하는 메서드
    setValue,
    trigger
  } = useForm({
    mode: "onChange", // mode 가 onChange 면 실행하라..
  });

  const onSubmit = (data) => console.log(data);
  const MAX_LIMIT = 10000000;
  return (
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
      <CardContent component="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between px-6">
          <Typography
            variant="h2"
            component="div"
            sx={{ textShadow: `${txtShadow}`, color: "white" }}
          >
            ￦{" "}
          </Typography>
          <NumericFormat
            className="text-5xl outline-none text-right"
            style={{ textShadow: `${txtShadow}`, color: `${yellowcolor}` }}
            type="text"
            value={num}
            maxLength="8"
            thousandSeparator=","
            renderText={(value) => {
              <b>{value}</b>;
            }}
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
          <SwiperCategory />
        </Typography>
        <Typography
          sx={{
            pt: 2,
            fontSize: 20,
            borderTop: "1px solid #bbb",
          }}
        >
          Brand
          <SwiperBrand />
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Simple;
