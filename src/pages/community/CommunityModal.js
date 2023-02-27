import { Favorite, FavoriteBorder } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import axios from "api/axios";
import { useSelector } from "react-redux";

const CommunityModal = ({ listDetail, modalIsOpen, setModalIsOpen }) => {
  const customStyles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: "99",
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "40%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "transparent",
      border: "none",
    },
  };
  const userData = useSelector((state) => state.user);
  const [detail, setDetail] = useState([]);
  const getPosts = async () => {
    const posts = await axios.get(`posts/${listDetail.id}`);
    console.log(posts.data);
    setDetail(posts.data);
  };
  useEffect(() => {
    getPosts();
  }, [listDetail]);

  console.log(detail);
  return (
    <Modal
      isOpen={modalIsOpen}
      ariaHideApp={false}
      onRequestClose={() => setModalIsOpen(false)}
      style={customStyles}
    >
      <div className="bg-stone-100 p-7 overflow-x-auto">
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
        </div>
        <p className="my-7 text-3xl font-bold text-center">MONTHLY COFFEE</p>
        <div className="flex justify-center mb-5">
          <div className="w-[75%] bg-black flex justify-center items-center drop-shadow">
            <img className="w-[98%] h-[98%]" src={listDetail.src} alt="pic" />
          </div>
        </div>
        <hr className="border-black border-dashed" />
        <div className="m-5 flex justify-around items-center text-2xl">
          <span className="font-bold">{detail.category}</span>
          <span className="text-lg">{detail.brand}</span>
        </div>
        <hr className=" border-black border-dashed" />
        <div className="flex justify-between items-center my-5 text-xl font-bold">
          <div>{listDetail.likeNumber}</div>
          <div className="flex justify-end gap-1">
            {detail.taste && (
              <span className="text-blue-600">#{detail.taste}</span>
            )}
            {detail.mood && (
              <span className="text-blue-600">#{detail.mood}</span>
            )}
            {detail.bean && (
              <span className="text-blue-600">#{detail.bean}</span>
            )}
          </div>
          {/* <hr className=" border-black border-dashed" />
          <div className="flex justify-around text-xl mt-5 font-bold">
            <button className="text-red-800">취소</button>
            <button>등록</button>
          </div> */}
        </div>
      </div>
      {/* <button onClick={() => setModalIsOpen(false)}>Modal close</button> */}
    </Modal>
  );
};

export default CommunityModal;
