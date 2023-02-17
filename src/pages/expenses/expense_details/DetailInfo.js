import React from "react";
import { Close, Edit } from "@mui/icons-material";

const DetailInfo = ({ setModalIsOpen, edit, setEdit }) => {
  return (
    <>
      <div className="flex justify-between mb-5">
        <Edit
          style={{ fontSize: 30, cursor: "pointer" }}
          onClick={() => setEdit(!edit)}
        />
        <Close style={{ fontSize: 30 }} onClick={() => setModalIsOpen(false)} />
      </div>
      <div className="flex justify-between">
        <div>
          <span>지출</span> - <span>카드</span>
        </div>
        <p className="text-right">2023/02/17</p>
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
          <span className="font-bold">아메리카노</span>
          <span className="text-lg">스타벅스</span>
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

export default DetailInfo;
