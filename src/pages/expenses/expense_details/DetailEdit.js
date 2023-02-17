import React, { useState } from "react";
import { Close, Edit } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const schema = yup.object({
  title: yup.string().trim().required("제목을 입력해주세요."),
  content: yup.string().trim().required("내용을 입력해주세요."),
  timestamp: yup.string().required("날짜를 선택해주세요."),
});

const DetailEdit = ({ setModalIsOpen, edit, setEdit }) => {
  const [payment, setPayment] = useState("0");
  const [cate, setCate] = useState("0");
  const [brand, setBrand] = useState("0");

  const { register } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange", // mode 가 onChange 면 실행하라..
  });

  return (
    <>
      <div className="flex justify-between mb-5">
        {/* <Edit style={{ fontSize: 30 }} /> */}
        <span className="text-red-500" onClick={() => setEdit(!edit)}>
          수정페이지 예정
        </span>
        <Close style={{ fontSize: 30 }} onClick={() => setModalIsOpen(false)} />
      </div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <span>지출 - </span>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Payment
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={payment}
              onChange={(e) => setPayment(e.target.value)}
              label="Payment"
            >
              <MenuItem value={0}>카드</MenuItem>
              <MenuItem value={1}>현금</MenuItem>
            </Select>
          </FormControl>
        </div>
        <p className="text-right">2023/02/17</p>
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
              value={cate}
              onChange={(e) => setCate(e.target.value)}
              label="Category"
            >
              <MenuItem value={0}>아메리카노</MenuItem>
              <MenuItem value={1}>까페라떼</MenuItem>
              <MenuItem value={2}>바닐라라떼</MenuItem>
              <MenuItem value={3}>초코라떼</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label">
              Brand
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              label="Brand"
            >
              <MenuItem value={0}>스타벅스</MenuItem>
              <MenuItem value={1}>투썸플레이스</MenuItem>
              <MenuItem value={2}>이디야</MenuItem>
              <MenuItem value={3}>빽다방</MenuItem>
            </Select>
          </FormControl>
        </div>
        <span className="font-bold">5,500원</span>
      </div>
      <hr className=" border-black border-dashed" />
      <div className="my-5 flex flex-col gap-3">
        <span className="text-lg text-blue-600 text-right">
          #신맛 #TALK #멕시코
        </span>
        <span className="text-lg">
          깔끔하고 강렬한 에스프레소를 부드럽지만 시원하게 즐길 수 있는 커피!
        </span>
      </div>
      <hr className=" border-black border-dashed" />
      <div className="mt-3">
        <button>커뮤니티 등록</button>
      </div>
    </>
  );
};

export default DetailEdit;
