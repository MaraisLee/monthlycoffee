import { Favorite, FavoriteBorder } from "@mui/icons-material";
import React, { useState } from "react";
import Modal from "react-modal";

const CommunityModal = ({ modalIsOpen, setModalIsOpen }) => {
  const [like, setLike] = useState(false);
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: "99",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "35%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
    },
  };
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
    >
      <div className="bg-gray-100 p-4">
        <div className="bg-white border rounded-sm">
          <div className="flex items-center px-4 py-3">
            <img
              className="h-8 w-8 rounded-full"
              src="./images/꼬부기.jpg"
              alt="pic"
            />
            <span className="ml-3 text-xl font-semibold antialiased block leading-tight">
              꼬부기
            </span>
          </div>
          <img src="./images/coffee.jpg" alt="pic" />
          <div className="flex items-center justify-between mx-4 my-2">
            <div className="flex flex-col">
              <span className="font-bold text-xl">아메리카노 - 경산산</span>
              <span className="text-lg text-blue-500">#단맛 #SELFIE #브라질</span>
            </div>
            <div className="flex flex-col items-end">
              <span
                className="font-semibold text-xl text-red-600 cursor-pointer"
                onClick={() => {
                  setLike(!like);
                }}
              >
                {like ? <Favorite /> : <FavoriteBorder />}
              </span>
              <span className="text-lg font-semibold">150 likes</span>
            </div>
          </div>
          <p className="mx-4 mb-4 text-lg">
            외부 테라스 공간에 자리잡고 햇살을 맞으며 멍때리기 좋은 힐링스팟!
          </p>
        </div>
      </div>
      {/* <button onClick={() => setModalIsOpen(false)}>Modal close</button> */}
    </Modal>
  );
};

export default CommunityModal;
