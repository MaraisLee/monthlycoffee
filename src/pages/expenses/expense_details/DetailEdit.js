import React, { useState } from "react";
import { Close, Edit } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DetailEditCss from "styles/DetailEditCss";

const schema = yup.object({
  price: yup.string().trim().required("금액을 입력해주세요."),
  memo: yup.string().trim().required("내용을 입력해주세요."),
});

const DetailEdit = ({ modalData, setModalIsOpen, edit, setEdit }) => {
  // const [payment, setPayment] = useState("0");
  // const [cate, setCate] = useState("0");
  const [brand, setBrand] = useState("0");

  const { register, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange", // mode 가 onChange 면 실행하라..
  });
  const [startDate, setStartDate] = useState(new Date());

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <DetailEditCss>
        <div className="flex justify-between mb-5">
          {/* <Edit style={{ fontSize: 30 }} /> */}
          <span className="text-red-500" onClick={() => setEdit(!edit)}>
            수정페이지 예정
          </span>
          <Close
            style={{ fontSize: 30 }}
            onClick={() => setModalIsOpen(false)}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <button type="submit">수정</button>
          <div className="flex justify-between">
            <div className="flex items-center">
              <span>지출 - </span>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Payment
                </InputLabel>
                <Select
                  {...register("payment")}
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Payment"
                  defaultValue={modalData.payment}
                >
                  <MenuItem value="0">카드</MenuItem>
                  <MenuItem value="1">현금</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className="text-right">
              <DatePicker
                dateFormat="yyyy-MM-dd"
                selected={startDate}
                defaultValue={modalData.date}
                className="input-datepicker"
                maxDate={new Date()}
                onChange={(date) => setStartDate(date)}
                {...register("date")}
              />
            </div>
          </div>
          <p className="my-7 text-3xl font-bold text-center">MONTHLY COFFEE</p>
          <hr className="border-black border-dashed" />
          <div className="m-5 flex justify-between items-center text-2xl">
            <div className="flex flex-col items-center">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  // value={cate}
                  defaultValue={modalData.category}
                  label="Category"
                  {...register("category")}
                >
                  <MenuItem value="아메리카노">아메리카노</MenuItem>
                  <MenuItem value="까페라떼">까페라떼</MenuItem>
                  <MenuItem value="바닐라라떼">바닐라라떼</MenuItem>
                  <MenuItem value="초코라떼">초코라떼</MenuItem>
                  <MenuItem value="카푸치노">카푸치노</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Brand
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  // value={brand}
                  defaultValue={modalData.brand}
                  onChange={(e) => setBrand(e.target.value)}
                  label="Brand"
                >
                  <MenuItem value="스타벅스">스타벅스</MenuItem>
                  <MenuItem value="투썸플레이스">투썸플레이스</MenuItem>
                  <MenuItem value="이디야">이디야</MenuItem>
                  <MenuItem value="빽다방">빽다방</MenuItem>
                </Select>
              </FormControl>
            </div>
            <span className="font-bold">
              <input
                className="price"
                type="text"
                defaultValue={modalData.price}
                {...register("title")}
              />
              원
            </span>
          </div>
          <hr className=" border-black border-dashed" />
          <div className="my-5 flex flex-col gap-3">
            <div className="flex">
              <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Taste
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  defaultValue={modalData.taste}
                  // value={taste}
                  // onChange={(e) => setPayment(e.target.value)}
                  label="Taste"
                >
                  <MenuItem value="SOUR">신맛</MenuItem>
                  <MenuItem value="SWEET">단맛</MenuItem>
                  <MenuItem value="SAVORY">고소한맛</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Mood
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  defaultValue={modalData.mood}
                  // value={mood}
                  // onChange={(e) => setPayment(e.target.value)}
                  label="Mood"
                >
                  <MenuItem value="WORK">Work</MenuItem>
                  <MenuItem value="TALK">Talk</MenuItem>
                  <MenuItem value="SELFIE">Selfie</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Bean Type
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  defaultValue={modalData.bean}
                  // value={beanType}
                  // onChange={(e) => setPayment(e.target.value)}
                  label="BeanType"
                >
                  <MenuItem value="BRAZIL">브라질</MenuItem>
                  <MenuItem value="GUATEMALA">과테말라</MenuItem>
                  <MenuItem value="COLOMBIA">콜롬비아</MenuItem>
                  <MenuItem value="MEXICO">멕시코</MenuItem>
                  <MenuItem value="INDONESIA">인도네시아</MenuItem>
                  <MenuItem value="VIETNAM">베트남</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Total Rate
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  defaultValue={modalData.likeHate}
                  // value={beanType}
                  // onChange={(e) => setPayment(e.target.value)}
                  label="TotalRate"
                >
                  <MenuItem value="LIKE">좋아요</MenuItem>
                  <MenuItem value="SOSO">무난해요</MenuItem>
                  <MenuItem value="HATE">싫어요</MenuItem>
                </Select>
              </FormControl>
            </div>
            {/* <span className="text-lg text-blue-600 text-right">
            #신맛 #TALK #멕시코
          </span> */}
            {/* <span className="text-lg">
              깔끔하고 강렬한 에스프레소를 부드럽지만 시원하게 즐길 수 있는
              커피!
            </span> */}
            <textarea
              className="memo"
              rows="3"
              defaultValue={modalData.memo}
              placeholder="내용을 입력해주세요."
              // ref={textareaEdit}
              {...register("memo")}
            />
          </div>
          <hr className=" border-black border-dashed" />
          <button>취소</button>
        </form>
      </DetailEditCss>
    </>
  );
};

export default DetailEdit;
