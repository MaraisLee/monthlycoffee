import React, { useState } from "react";
import { Close, DeleteForever } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DetailEditCss from "styles/DetailEditCss";
import axios from "api/axios";

const schema = yup.object({
  price: yup.string().trim().required("금액을 입력해주세요."),
  memo: yup.string().trim().required("내용을 입력해주세요."),
});

const DetailEdit = ({ modalData, setModalIsOpen, edit, setEdit }) => {
  const { register, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange", // mode 가 onChange 면 실행하라..
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log(modalData.id);
    const body = {
      id: modalData.id,
      category: data.category,
      brand: data.brand,
      price: data.price,
      date: data.date,
      // memo: null,
      // tumbler: null,
      // taste: null,
      // mood: null,
      // bean: null,
      // likeHate: null,
      // payment: null,
      // images: [],
    };
    axios
      .patch(
        `expenses/${modalData.id}`,
        // {
        //   headers: {
        //     Authorization:
        //       "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NzcxMzM2MjcsIm1lbWJlcklkIjoxfQ.xaFlziTbzhQTP5x8RphEQesVW-7688Ae3Vq6FSgKt_c",
        //   },
        // },
        body
      )
      .then((res) => {
        return console.log(res);
      })
      .catch((err) => {
        return console.log(err);
      });
  };
  return (
    <>
      <DetailEditCss>
        <div className="flex justify-between gap-5 mb-5">
          <DeleteForever style={{ fontSize: 30, cursor: "pointer" }} />
          <Close
            style={{ fontSize: 30, cursor: "pointer" }}
            onClick={() => setModalIsOpen(false)}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            <div className="flex items-center">
              <span>지출 - </span>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 70 }}>
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
              <input
                type="date"
                defaultValue={modalData.date}
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
                  label="Brand"
                  {...register("brand")}
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
                {...register("price")}
              />
              원
            </span>
          </div>
          <hr className=" border-black border-dashed" />
          <div className="my-5 flex flex-col gap-3">
            <div className="flex">
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
                  {...register("totalrate")}
                >
                  <MenuItem value="LIKE">좋아요</MenuItem>
                  <MenuItem value="SOSO">무난해요</MenuItem>
                  <MenuItem value="HATE">싫어요</MenuItem>
                </Select>
              </FormControl>
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
                  {...register("taste")}
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
                  {...register("mood")}
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
                  label="BeanType"
                  {...register("bean")}
                >
                  <MenuItem value="BRAZIL">브라질</MenuItem>
                  <MenuItem value="GUATEMALA">과테말라</MenuItem>
                  <MenuItem value="COLOMBIA">콜롬비아</MenuItem>
                  <MenuItem value="MEXICO">멕시코</MenuItem>
                  <MenuItem value="INDONESIA">인도네시아</MenuItem>
                  <MenuItem value="VIETNAM">베트남</MenuItem>
                </Select>
              </FormControl>
            </div>
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
          <div className="flex justify-around text-xl font-bold mt-5">
            <button onClick={() => setEdit(!edit)}>취소</button>
            <button type="submit">수정</button>
          </div>
        </form>
      </DetailEditCss>
    </>
  );
};

export default DetailEdit;
