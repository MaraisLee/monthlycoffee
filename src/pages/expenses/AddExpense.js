import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { VioletBt } from "styles/AddEXpenseCss";
import { Switch } from "@mui/material";
import { txtShadow, yellowcolor } from "utils/colors";
import { GreenBt } from "utils/basicCss";
import SwiperCategory from "./SwiperCategory";
import SwiperBrand from "./SwiperBrand";

const AddExpense = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <div className="flex flex-col p-10 w-4/5">
        <h1 className="text-4xl my-10">Add Expense</h1>
        <div className="flex">
          <VioletBt>간편 입력</VioletBt>
          <VioletBt style={{ background: "ivory" }}>상세 입력</VioletBt>
        </div>
        <Card variant="outlined" className="p-10">
          <div className="flex justify-between">
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
            <Typography
              variant="h4"
              component="div"
              sx={{ textShadow: ` ${txtShadow}`, color: "white" }}
            >
              ￦{" "}
              <input
                type="text"
                style={{ color: "black" }}
                placeholder="금액을 입력해주세요."
                value={num}
                onChange={(e) => setNum(e.target.value)}
              />
            </Typography>

            <Typography
              sx={{ py: 2, my: 5, fontSize: 20, borderTop: "1px solid #bbb" }}
            >
              Category
              <SwiperCategory />
            </Typography>
            <Typography
              sx={{ py: 2, my: 5, fontSize: 20, borderTop: "1px solid #bbb" }}
            >
              Brand
              <SwiperBrand />
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
        <GreenBt style={{ alignSelf: "flex-end", marginTop: 40 }}>등록</GreenBt>
      </div>
    </>
  );
};

export default AddExpense;
