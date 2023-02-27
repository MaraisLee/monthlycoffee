import React, { useEffect, useRef, useState } from "react";
import { Close, DeleteForever } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import DetailEditCss from "styles/DetailEditCss";
import axios from "api/axios";
import { getCookie } from "api/cookie";

const DetailEdit = ({
  modalData,
  updateBt,
  setUpdateBt,
  setModalIsOpen,
  edit,
  setEdit,
}) => {
  const { register, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange", // mode 가 onChange 면 실행하라..
  });
  console.log(modalData);
  const [imgSrc, setImgSrc] = useState("");
  const price = [modalData.price]
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // console.log(modalData.images[0].filename);
  const getImg = () => {
    // console.log(modalData.images.length);
    if (modalData.images.length > 0) {
      const imgName = modalData.images[0].filename;
      axios
        .get(`expenses/image/${imgName}`, {
          headers: { "Content-type": "application/json; charset=UTF-8" },
          responseType: "blob",
          timeout: 5000,
        })
        .then((res) => {
          console.log(res.data);
          // setImgSrc(res.data);
          const myFile = new File([res.data], "imageName");
          const reader = new FileReader();
          reader.onload = (e) => {
            const previewImage = String(e.target?.result);
            setImgSrc(previewImage); // myImage라는 state에 저장했음
          };
          reader.readAsDataURL(myFile);
        })
        .catch((err) => console.log(err));
    }
  };
  useEffect(() => {
    getImg();
  }, []);

  // 이미지 업로드 및 미리보기
  const [imgFile, setImgFile] = useState("");
  const [img, setImg] = useState("");
  const imgRef = useRef(null);
  const path = process.env.PUBLIC_URL;
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

  const deleteExpense = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      axios
        .delete(`expenses/${modalData.id}`)
        .then((res) => {
          console.log(res);
          setUpdateBt(++updateBt);
          setModalIsOpen(false);
          alert("삭제되었습니다.");
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteImg = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      const imgName = modalData.images[0].filename;
      axios
        .delete(`expenses/image/${imgName}`)
        .then((res) => {
          console.log(res);
          setUpdateBt(++updateBt);
          setImgSrc("");
          alert("삭제되었습니다.");
        })
        .catch((err) => console.log(err));
    }
  };

  const onSubmit = async (data) => {
    console.log(data);
    // console.log(modalData.id);
    const body = {
      id: modalData.id,
      payment: data.payment,
      date: data.date,
      category: data.category,
      brand: data.brand,
      price: data.price,
      memo: data.memo === "" ? modalData.memo : data.memo,
      // tumbler: data.tumbler === "" ? modalData.tumbler : data.tumbler,
      taste: data.taste === "" ? modalData.taste : data.taste,
      mood: data.mood === "" ? modalData.mood : data.mood,
      bean: data.bean === "" ? modalData.bean : data.bean,
      likeHate: data.likeHate === "" ? modalData.likeHate : data.likeHate,
      // images: [],
    };
    console.log(body);
    await axios
      .patch(`expenses/${modalData.id}`, body)
      .then((res) => {
        console.log(res);
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
        setModalIsOpen(false);
        setEdit(false);
        alert("수정이 완료되었습니다.")
      })
      .catch((err) => {
        return console.log(err);
      });
  };
  return (
    <>
      <DetailEditCss>
        <div className="flex justify-between gap-5 mb-5">
          <DeleteForever
            style={{ fontSize: 30, cursor: "pointer" }}
            onClick={deleteExpense}
          />
          <Close
            style={{ fontSize: 30, cursor: "pointer" }}
            onClick={() => setModalIsOpen(false)}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-between">
            <div className="flex items-center">
              <span>지출 - </span>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
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
          <p className="my-5 text-3xl font-bold text-center">MONTHLY COFFEE</p>
          {imgSrc ? (
            <div className="flex justify-center items-center gap-2">
              <img
                className="w-1/4"
                src={imgSrc}
                // src="./images/coffee.jpg"
                alt="pic"
              />
              <span
                className="text-red-800 font-bold cursor-pointer"
                onClick={deleteImg}
              >
                삭제
              </span>
            </div>
          ) : (
            <div className="uploadImg">
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
            </div>
          )}
          <hr className="mt-2 border-black border-dashed" />
          <div className="m-5 flex justify-between items-center text-lg">
            <div className="flex flex-col gap-1 w-[45%] items-center">
              {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
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
              </FormControl> */}
              <input
                className="border w-full"
                type="text"
                defaultValue={modalData.category}
                required
                {...register("category")}
              />
              <input
                className="border w-full"
                type="text"
                defaultValue={modalData.brand}
                required
                {...register("brand")}
              />
            </div>
            <div className="flex w-[40%]">
              <input
                className="border w-full"
                type="text"
                defaultValue={modalData.price}
                {...register("price")}
              />
              원
            </div>
          </div>
          <hr className=" border-black border-dashed" />
          <div className="my-5 flex flex-col gap-3">
            <div className="flex justify-around flex-wrap">
              {/* <FormControl variant="standard" sx={{ m: 1, minWidth: 100 }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Tumbler
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  defaultValue={modalData.tumbler}
                  // value={beanType}
                  // onChange={(e) => setPayment(e.target.value)}
                  label="Tumbler"
                  {...register("tumbler")}
                >
                  <MenuItem value={null}>없음</MenuItem>
                  <MenuItem value="false">사용안함</MenuItem>
                  <MenuItem value="true">사용</MenuItem>
                </Select>
              </FormControl> */}
              <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
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
                  <MenuItem value={null}>없음</MenuItem>
                  <MenuItem value="SOUR">신맛</MenuItem>
                  <MenuItem value="SWEET">단맛</MenuItem>
                  <MenuItem value="SAVORY">고소한맛</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
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
                  <MenuItem value={null}>없음</MenuItem>
                  <MenuItem value="WORK">Work</MenuItem>
                  <MenuItem value="TALK">Talk</MenuItem>
                  <MenuItem value="SELFIE">Selfie</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
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
                  <MenuItem value={null}>없음</MenuItem>
                  <MenuItem value="BRAZIL">브라질</MenuItem>
                  <MenuItem value="GUATEMALA">과테말라</MenuItem>
                  <MenuItem value="COLOMBIA">콜롬비아</MenuItem>
                  <MenuItem value="MEXICO">멕시코</MenuItem>
                  <MenuItem value="INDONESIA">인도네시아</MenuItem>
                  <MenuItem value="VIETNAM">베트남</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
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
                  {...register("likeHate")}
                >
                  <MenuItem value={null}>없음</MenuItem>
                  <MenuItem value="LIKE">좋아요</MenuItem>
                  <MenuItem value="SOSO">무난해요</MenuItem>
                  <MenuItem value="HATE">싫어요</MenuItem>
                </Select>
              </FormControl>
            </div>
            <textarea
              className="memo px-3 py-1"
              rows="3"
              defaultValue={modalData.memo ? modalData.memo : undefined}
              placeholder="내용을 입력해주세요."
              // ref={textareaEdit}
              {...register("memo")}
            />
          </div>
          <hr className=" border-black border-dashed" />
          <div className="flex justify-around text-xl font-bold mt-5">
            <button onClick={() => setEdit(false)}>취소</button>
            <button type="submit">수정</button>
          </div>
        </form>
      </DetailEditCss>
    </>
  );
};

export default DetailEdit;
