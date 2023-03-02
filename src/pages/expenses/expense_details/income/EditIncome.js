import { Close } from "@mui/icons-material";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "api/axios";

const EditIncome = ({ item, updateBt, setUpdateBt, editIn, setEditIn }) => {
  const { register, handleSubmit } = useForm({
    // resolver: yupResolver(schema),
    mode: "onChange", // mode 가 onChange 면 실행하라..
  });
  const onSubmit = (data) => {
    // console.log(data);
    // console.log(modalData.id);
    const body = {
      amount: data.amount,
      note: data.note,
      date: data.date,
    };
    console.log(body);
    axios
      .patch(`incomes/${item.id}`, body)
      .then((res) => {
        console.log(res);
        setUpdateBt(++updateBt);
        setEditIn(false);
      })
      .catch((err) => {
        return console.log(err);
      });
  };
  return (
    <div className="relative px-20 h-[7vh] bg-white border border-black">
      <form
        className="flex h-full text-lg items-center"
        onSubmit={handleSubmit(onSubmit)}
      >
        <span className="flex-1">
          <input type="date" defaultValue={item.date} {...register("date")} />
        </span>
        <div className="flex flex-col flex-1 items-center">
          <input
            className="text-xl border w-4/5"
            type="text"
            defaultValue={item.note}
            placeholder="내용을 입력해주세요."
            required
            {...register("note")}
          />
        </div>
        <div className="flex flex-1 text-end">
          <input
            className="border w-4/5"
            type="text"
            defaultValue={item.amount}
            placeholder="금액을 입력해주세요."
            required
            {...register("amount")}
          />
          원
        </div>
        <div className="flex flex-1 justify-end gap-5 text-xl font-bold">
          <button className="text-blue-800" type="submit">
            수정
          </button>
          <button className="text-red-800" onClick={() => setEditIn(!editIn)}>
            취소
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditIncome;
