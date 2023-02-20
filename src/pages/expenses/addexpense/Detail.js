import React, { useRef, useState } from "react";
import { Card, CardContent, Checkbox, Switch, Typography } from "@mui/material";
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

  // 이미지 업로드 및 미리보기
  const [imgFile, setImgFile] = useState("");
  const imgRef = useRef(null);
  const onChangeImg = async (e) => {
    e.preventDefault();

    // 미리보기 기능
    if (e.target.files) {
      // files는 배열에 담긴다.
      // file 이 1개 이므로 e.target.files[0]
      const uploadFile = e.target.files[0];
      console.log(uploadFile);

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

  const [checked, setChecked] = useState(true);
  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

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

          <Checkbox
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <InputDiv>
            <textarea
              cols="30"
              rows="5"
              // defaultValue={item.content}
              placeholder="내용을 입력해주세요."
              {...register("content")}
            />
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
                gap: 22,
              }}
            >
              {["신맛", "단맛", "고소한맛"].map((value) => (
                <Sheet
                  key={value}
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
                    label={value}
                    overlay
                    disableIcon
                    value={value}
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
              overlay
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
              {["working", "conversation", "selfie"].map((value) => (
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
              {[
                "브라질",
                "과테말라",
                "콜롬비아",
                "멕시코",
                "인도네시아",
                "베트남",
              ].map((value) => (
                <Sheet
                  key={value}
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
                    label={value}
                    overlay
                    disableIcon
                    value={value}
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
                { name: "보통이예요", img: "normal" },
                { name: "싫어요", img: "dislike" },
              ].map((value) => (
                <Sheet
                  key={value}
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
                    label={value.name}
                    overlay
                    disableIcon
                    value={value.name}
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
        </CardContent>
      </Card>
      <GreenBt type="submit" style={{ alignSelf: "flex-end", marginTop: 40 }}>
        등록
      </GreenBt>
    </>
  );
};

export default Detail;
