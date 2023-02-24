import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import axios from "api/axios";

const UpdateCommu = ({ modalData, setOpen }) => {
  const userData = useSelector((state) => state.user);
  const { register, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange", // mode 가 onChange 면 실행하라..
  });
  const onSubmit = (data) => {
    console.log(data);
    console.log(modalData.id);
    const body = {
      expenseId: modalData.id,
      content: data.memo,
    };
    axios
      .patch("posts", body)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        return console.log(err);
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
      <div className="flex justify-center">
        <img
          className="w-1/2 border-4 border-red-500 mb-5"
          src="./images/coffee.jpg"
          alt="pic"
        />
      </div>
      <hr className="border-black border-dashed" />
      <div className="m-5 flex justify-between items-center text-2xl">
        <div className="flex flex-col items-center">
          <span className="font-bold">{modalData.category}</span>
          <span className="text-lg">{modalData.brand}</span>
        </div>
        <span className="font-bold">{modalData.price}원</span>
      </div>
      <hr className=" border-black border-dashed" />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between text-lg">
          <span className="text-blue-600">
            #{modalData.taste} #{modalData.mood} #{modalData.bean}
          </span>
        </div>
        <textarea
          className="memo"
          rows="3"
          placeholder="내용을 입력해주세요."
          // ref={textareaEdit}
          {...register("memo")}
        />
        <hr className=" border-black border-dashed" />
        <div className="flex justify-around text-xl mt-5">
          <button
            onClick={() => {
              setOpen(false);
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
