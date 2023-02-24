import React, { useState } from "react";
import { Close, Edit } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescriptionBottle } from "@fortawesome/free-solid-svg-icons";
import UpdateCommu from "./UpdateCommu";

const DetailInfo = ({ modalData, setModalIsOpen, edit, setEdit }) => {
  console.log(modalData);
  const [open, setOpen] = useState(false);
  const updatePost = () => {};
  return (
    <>
      {open ? (
        <UpdateCommu modalData={modalData} setOpen={setOpen} />
      ) : (
        <div>
          <div className="flex justify-between mb-5">
            <Edit
              style={{ fontSize: 30, cursor: "pointer" }}
              onClick={() => setEdit(!edit)}
            />
            <Close
              style={{ fontSize: 30 }}
              onClick={() => setModalIsOpen(false)}
            />
          </div>
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
          <div className="my-5 flex flex-col gap-3">
            <div className="flex justify-between text-lg">
              <div className="flex gap-3">
                <span className="font-bold">{modalData.likeHate}</span>
                <span>
                  <FontAwesomeIcon icon={faPrescriptionBottle} />
                </span>
              </div>
              <span className="text-blue-600">
                #{modalData.taste} #{modalData.mood} #{modalData.bean}
              </span>
            </div>
            <p className="text-lg">{modalData.memo}</p>
          </div>
          <hr className=" border-black border-dashed" />
          <div className="flex justify-center mt-5">
            {open ? (
              <button
                className="text-xl text-red-800 font-bold cursor-pointer"
                onClick={() => {
                  setOpen(!open);
                }}
              >
                테스트
              </button>
            ) : (
              <button
                className="text-xl text-green-800 font-bold cursor-pointer"
                onClick={() => {
                  setOpen(true);
                }}
              >
                커뮤니티 등록
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailInfo;
