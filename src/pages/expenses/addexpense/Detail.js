import React, { useRef, useState } from "react";
import axios from "api/axios";
import {
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import Sheet from "@mui/joy/Sheet";
import SwiperBrand from "./SwiperBrand";
import SwiperCategory from "./SwiperCategory";
import { txtShadow, yellowcolor } from "utils/colors";
import { NumericFormat } from "react-number-format";
import { useForm } from "react-hook-form";
import { Box, InputDiv } from "styles/AddEXpenseCss";
import FormLabel from "@mui/joy/FormLabel";
import Radio, { radioClasses } from "@mui/joy/Radio";
import RadioGroup from "@mui/joy/RadioGroup";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { GreenBt } from "utils/basicCss";
import { useNavigate } from "react-router-dom";
import { getCookie } from "api/cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescriptionBottle } from "@fortawesome/free-solid-svg-icons";
import Tooltip from "@mui/joy/Tooltip";

const Detail = ({ num, setNum }) => {
  const { register, handleSubmit } = useForm({
    mode: "onChange",
  });
  const navigate = useNavigate();
  const MAX_LIMIT = 10000000;
  const path = process.env.PUBLIC_URL;
  const beans = [
    {
      id: "BRAZIL",
      name: "브라질",
    },
    {
      id: "GUATEMALA",
      name: "과테말라",
    },
    {
      id: "COLOMBIA",
      name: "콜롬비아",
    },
    {
      id: "MEXICO",
      name: "멕시코",
    },
    {
      id: "INDONESIA",
      name: "인도네시아",
    },
    {
      id: "VIETNAM",
      name: "베트남",
    },
  ];

  // 이미지 업로드 및 미리보기
  const [imgFile, setImgFile] = useState("");
  const [img, setImg] = useState("");
  const imgRef = useRef(null);
  const onChangeImg = async (e) => {
    e.preventDefault();

    // 미리보기 기능
    if (e.target.files) {
      // files는 배열에 담긴다.
      // file 이 1개 이므로 e.target.files[0]
      const uploadFile = e.target.files[0];
      console.log("파일", uploadFile);
      setImg(uploadFile);
      // 이미지를 읽어들이는 바닐라 함수
      const reader = new FileReader();
      reader.readAsDataURL(uploadFile);
      reader.onloadend = () => {
        // 임시 이미지가 만들어진다.
        // useState 입니다.
        setImgFile(reader.result);
      };
    }
  };
  // tumbler check
  const [tumbler, setTumbler] = useState(false);
  const handleChange = (e) => {
    setTumbler(e.target.checked);
  };

  // 날짜
  const dateNow = new Date();
  const today = dateNow.toISOString().slice(0, 10);

  // 브랜드,카테고리,입력금액
  const [brand, setBrand] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const onSubmit = async (data) => {
    const priceRaw = price.split(",").join("");
    const body = {
      payment: data.payment,
      date: data.date,
      price: priceRaw,
      memo: data.memo,
      tumbler: tumbler,
      category: category,
      brand: brand,
      taste: data.taste,
      mood: data.mood,
      bean: data.bean,
      likeHate: data.likeHate,
    };

    await axios
      .post("expenses", body, {
        headers: { Authorization: getCookie("access_token") },
      })
      .then((res) => {
        const expenseId = res.data.id;
        const formData = new FormData();
        formData.append("file", img);
        axios({
          method: "post",
          url: `expenses/${expenseId}/image`,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: getCookie("access_token"),
          },
        });
        alert("지출이 입력되었습니다.");
        navigate("/expense");
      })
      .catch((err) => {
        console.log(err);
        alert("머지");
      });
  };

  return (
    <>
      <Card variant="outlined" className="p-10">
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">
            Payment
          </InputLabel>
          <Select
            {...register("payment")}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            label="Payment"
            defaultValue="0"
          >
            <MenuItem value="0">카드</MenuItem>
            <MenuItem value="1">현금</MenuItem>
          </Select>
        </FormControl>
        <CardContent component="form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="date"
            defaultValue={today}
            className="cursor-pointer pb-2"
            {...register("date")}
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
              className="text-5xl outline-none text-right"
              style={{ textShadow: `${txtShadow}`, color: `${yellowcolor}` }}
              type="text"
              maxLength="8"
              value={price}
              placeholder="0"
              onChange={(e) => setPrice(e.target.value)}
              thousandSeparator=","
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
              {...register("memo")}
            />

            <label className="mr-9">
              {tumbler ? (
                <>
                  <Tooltip
                    title="tumbler"
                    arrow={false}
                    style={{ color: "green", fontWeight: 600 }}
                    color="success"
                    placement="top"
                    size="md"
                  >
                    <FontAwesomeIcon
                      icon={faPrescriptionBottle}
                      className="text-4xl text-green-700"
                    />
                  </Tooltip>
                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    icon={faPrescriptionBottle}
                    className="text-4xl"
                  />
                </>
              )}

              <input
                type="checkbox"
                checked={tumbler}
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </label>

            {/* 이미지 업로드 */}
            <label htmlFor="ex_file">
              <img src={imgFile} alt="" />
              <img src={`${path}/images/camera.png`} alt="img" />
            </label>
            <input
              type="file"
              id="ex_file"
              accept="image/*"
              multiple
              // onChange={(e) => console.log(e.target.files[0])}
              onInput={onChangeImg}
              ref={imgRef}
            />
          </InputDiv>
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
              py: 2,
              my: 5,
              fontSize: 20,
              borderTop: "1px solid #bbb",
            }}
          >
            Brand
            <SwiperBrand brand={brand} setBrand={setBrand} />
          </Typography>
          {/* 상세입력 옵션들 */}
          <Box>
            <FormLabel
              id="storage-label"
              sx={{
                fontSize: 20,
                color: "black",
              }}
            >
              Taste
            </FormLabel>
            <RadioGroup
              aria-labelledby="storage-label"
              size="lg"
              sx={{
                width: "75%",
                flexDirection: "row",
                gap: 10,
              }}
            >
              {[
                { id: "SWEET", name: "단맛" },
                { id: "SOUR", name: "신맛" },
                { id: "SAVORY", name: "고소한맛" },
                { id: "BITTER", name: "쓴맛" },
              ].map((value) => (
                <Sheet
                  key={value.id}
                  sx={{
                    p: 2,
                    borderRadius: "md",
                    boxShadow: "sm",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: 150,
                  }}
                >
                  <Radio
                    {...register("taste")}
                    label={value.name}
                    overlay={true}
                    disableIcon
                    value={value.id}
                    slotProps={{
                      label: ({ checked }) => ({
                        sx: {
                          fontWeight: "lg",
                          fontSize: "md",
                          color: checked ? "text.primary" : "text.warning",
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            "--variant-borderWidth": "2px",
                            "&&": {
                              // && to increase the specificity to win the base :hover styles
                              borderColor: theme.vars.palette.warning[300],
                            },
                          }),
                        }),
                      }),
                    }}
                  />
                </Sheet>
              ))}
            </RadioGroup>
          </Box>
          <Box>
            <FormLabel
              id="storage-label"
              sx={{
                fontSize: 20,
                color: "black",
              }}
            >
              Mood
            </FormLabel>
            <RadioGroup
              aria-label="platform"
              overlay={true}
              name="platform"
              sx={{
                width: "75%",
                flexDirection: "row",
                gap: 27,
                [`& .${radioClasses.checked}`]: {
                  [`& .${radioClasses.action}`]: {
                    inset: -1,
                    border: "2px solid",
                    borderColor: "warning.300",
                  },
                },
                [`& .${radioClasses.radio}`]: {
                  display: "contents",
                  "& > svg": {
                    zIndex: 2,
                    position: "absolute",
                    top: "-8px",
                    right: "-8px",
                  },
                },
              }}
            >
              {["work", "talk", "selfie"].map((value) => (
                <Sheet
                  key={value}
                  variant="outlined"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                    p: 1,
                    minWidth: 120,
                    border: "none",
                    fontWeight: "lg",
                  }}
                >
                  <Radio
                    {...register("mood")}
                    label={value}
                    id={value}
                    value={value}
                    checkedIcon={<CheckCircleRoundedIcon />}
                  />
                  <img
                    src={`${path}/images/${value}.png`}
                    alt="img"
                    className="w-20"
                  />
                </Sheet>
              ))}
            </RadioGroup>
          </Box>
          <Box>
            <FormLabel
              id="storage-label"
              sx={{
                fontSize: 20,
                color: "black",
              }}
            >
              Bean Type
            </FormLabel>
            <RadioGroup
              aria-labelledby="storage-label"
              size="lg"
              sx={{
                width: "75%",
                flexDirection: "row",
                gap: 2,
              }}
            >
              {beans.map((value) => (
                <Sheet
                  key={value.id}
                  sx={{
                    p: 1,
                    borderRadius: "md",
                    boxShadow: "sm",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1.5,
                    minWidth: 120,
                  }}
                >
                  <Radio
                    {...register("bean")}
                    label={value.name}
                    overlay={true}
                    disableIcon
                    value={value.id}
                    slotProps={{
                      label: ({ checked }) => ({
                        sx: {
                          fontWeight: "lg",
                          fontSize: "md",
                          color: checked ? "text.primary" : "text.warning",
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            "--variant-borderWidth": "2px",
                            "&&": {
                              borderColor: theme.vars.palette.warning[300],
                            },
                          }),
                        }),
                      }),
                    }}
                  />
                </Sheet>
              ))}
            </RadioGroup>
          </Box>
          <Box>
            <FormLabel
              id="storage-label"
              sx={{
                fontSize: 20,
                color: "black",
              }}
            >
              Total Rate
            </FormLabel>
            <RadioGroup
              aria-labelledby="storage-label"
              size="lg"
              sx={{
                width: "75%",
                flexDirection: "row",
                gap: 22,
              }}
            >
              {[
                { name: "좋아요", img: "like" },
                { name: "무난해요", img: "soso" },
                { name: "싫어요", img: "hate" },
              ].map((value) => (
                <Sheet
                  key={value.img}
                  sx={{
                    p: 2,
                    borderRadius: "md",
                    boxShadow: "sm",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    minWidth: 120,
                  }}
                >
                  <img
                    src={`${path}/images/${value.img}.png`}
                    alt="img"
                    className="w-10 pb-2"
                  />
                  <Radio
                    {...register("likeHate")}
                    label={value.name}
                    overlay={true}
                    disableIcon
                    value={value.img}
                    slotProps={{
                      label: ({ checked }) => ({
                        sx: {
                          fontWeight: "lg",
                          fontSize: "md",
                          color: checked ? "text.primary" : "text.warning",
                        },
                      }),
                      action: ({ checked }) => ({
                        sx: (theme) => ({
                          ...(checked && {
                            "--variant-borderWidth": "2px",
                            "&&": {
                              borderColor: theme.vars.palette.warning[300],
                            },
                          }),
                        }),
                      }),
                    }}
                  />
                </Sheet>
              ))}
            </RadioGroup>
          </Box>
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

export default Detail;
