import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Switch,
  Typography,
} from "@mui/material";
import SwiperBrand from "./SwiperBrand";
import SwiperCategory from "./SwiperCategory";
import { txtShadow, yellowcolor } from "utils/colors";
import { NumericFormat } from "react-number-format";
import { useForm } from "react-hook-form";
import { InputDiv } from "styles/AddEXpenseCss";

const Detail = ({ num, setNum }) => {
  const {
    register,
    // handleSubmit,
    // formState: { errors },
    reset,
  } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange", // mode 가 onChange 면 실행하라..
  });

  const MAX_LIMIT = 10000000;
  const path = process.env.PUBLIC_URL;
  return (
    <Card variant="outlined" className="p-10 ">
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
      <CardContent>
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
        <InputDiv>
          <textarea
            cols="30"
            rows="5"
            // defaultValue={item.content}
            placeholder="내용을 입력해주세요."
            {...register("content")}
          />
          <label htmlFor="ex_file">
            <img src={`${path}/images/camera.png`} alt="img" />
          </label>
          <input
            type="file"
            id="ex_file"
            accept="image/*"
            onChange={(e) => console.log(e.target.files[0])}
          />
        </InputDiv>
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
            py: 2,
            my: 5,
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

export default Detail;
