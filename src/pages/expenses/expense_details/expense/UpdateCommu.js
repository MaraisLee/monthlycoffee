import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "api/axios";

const UpdateCommu = ({ modalData, imgSrc, setModalIsOpen, setOpenCommu }) => {
  const userData = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange", // mode 가 onChange 면 실행하라..
  });
  const onSubmit = (data) => {
    // console.log(data);
    // console.log(modalData.id);
    const body = {
      expenseId: modalData.id,
      content: data.memo,
    };
    console.log(body);
    axios
      .post("posts", body)
      .then((res) => {
        console.log(res);
        alert("게시글이 등록되었습니다!");
        setOpenCommu(false);
        setModalIsOpen(false);
      })
      .catch((err) => {
        console.log(err);
        alert(err.response.data.message);
      });
  };
  return (
    <>
      <div className="flex justify-between">
        <div className="flex items-center">
          <img
            className="h-9 w-9 rounded-full"
            src={userData.profileImage}
            alt="pic"
          />
          <span className="ml-3 text-xl font-semibold antialiased block leading-tight">
            {userData.nickname}
          </span>
        </div>
        <p className="text-right">{modalData.date}</p>
      </div>
      <p className="my-7 text-3xl font-bold text-center">MONTHLY COFFEE</p>
      <div className="flex justify-center mb-5">
        <div className="w-[80%] bg-black flex justify-center items-center drop-shadow">
          <img
            className="w-[98%] h-[98%]"
            src={imgSrc}
            // src="./images/coffee.jpg"
            alt="pic"
          />
        </div>
      </div>
      <hr className="border-black border-dashed" />
      <div className="m-5 flex justify-around items-center text-2xl">
        <span className="font-bold">{modalData.category}</span>
        <span className="text-lg">{modalData.brand}</span>
      </div>
      <hr className=" border-black border-dashed" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex text-lg justify-end my-2 gap-1">
          {modalData.taste && (
            <span className="text-blue-600">#{modalData.taste}</span>
          )}
          {modalData.mood && (
            <span className="text-blue-600">#{modalData.mood}</span>
          )}
          {modalData.bean && (
            <span className="text-blue-600">#{modalData.bean}</span>
          )}
        </div>
        <textarea
          className="memo w-full p-2 mb-2"
          rows="3"
          placeholder="내용을 입력해주세요."
          required
          {...register("memo")}
        />
        <hr className=" border-black border-dashed" />
        <div className="flex justify-around text-xl mt-5 font-bold">
          <button
            className="text-red-800"
            onClick={() => {
              setOpenCommu(false);
            }}
          >
            취소
          </button>
          <button type="submit">등록</button>
        </div>
      </form>
    </>
  );
};

export default UpdateCommu;
