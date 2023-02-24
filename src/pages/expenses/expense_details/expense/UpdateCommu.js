import React from "react";

const UpdateCommu = ({ modalData, setOpen }) => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <span>지출</span> - <span>카드</span>
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
      <div className="flex justify-between text-lg">
        <span className="font-bold">{modalData.likeHate}</span>
        <span className="text-blue-600">
          #{modalData.taste} #{modalData.mood} #{modalData.bean}
        </span>
      </div>
      <p className="text-lg">{modalData.memo}</p>
      <hr className=" border-black border-dashed" />
      <div className="flex justify-around text-xl mt-5">
        <button
          onClick={() => {
            setOpen(false);
          }}
        >
          취소
        </button>
        <button>등록</button>
      </div>
    </>
  );
};

export default UpdateCommu;
