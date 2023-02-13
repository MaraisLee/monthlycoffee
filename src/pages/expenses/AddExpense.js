import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { VioletBt } from "styles/AddEXpenseCss";
import { Switch } from "@mui/material";
import { yellowcolor } from "utils/colors";
import { GreenBt } from "utils/basicCss";

const AddExpense = () => {
  return (
    <>
      <div className="absolute p-10 w-3/4">
        <h1 className="text-4xl my-10">Add Expense</h1>
        <div className="flex">
          <VioletBt>간편 입력</VioletBt>
          <VioletBt style={{ background: " ivory" }}>상세 입력</VioletBt>
        </div>
        <Card variant="outlined" className="p-10">
          카드
          <Switch checked={true} color="warning" size="lg" />
          현금
          <div className="absolute top-52 right-10">
            수입
            <Switch checked={true} color="secondary" size="lg" />
            지출
          </div>
          <CardContent>
            <Typography variant="h4" component="div">
              0원
            </Typography>
            <Typography sx={{ my: 5 }} variant="body2">
              카테고리
            </Typography>
            <Typography variant="body2">브랜드</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
        <GreenBt>등록</GreenBt>

        {/* <Box>
          <h2>상세 입력</h2>
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Box> */}
      </div>
    </>
  );
};

export default AddExpense;
