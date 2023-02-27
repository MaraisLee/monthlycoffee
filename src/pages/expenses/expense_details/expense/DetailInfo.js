import React, { useEffect, useState } from "react";
import { Close, Edit } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrescriptionBottle } from "@fortawesome/free-solid-svg-icons";
import UpdateCommu from "./UpdateCommu";
import axios from "api/axios";

const DetailInfo = ({
  modalData,
  setModalIsOpen,
  edit,
  setEdit,
  openCommu,
  setOpenCommu,
}) => {
  const [imgSrc, setImgSrc] = useState("");
  const price = [modalData.price]
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  // console.log(modalData.images[0].filename);
  const getImg = async () => {
    // console.log(modalData.images.length);
    if (modalData.images.length > 0) {
      const imgName = modalData.images[0].filename;
      await axios
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

  // console.log(imgSrc);
  return (
    <>
      {openCommu ? (
        <UpdateCommu
          modalData={modalData}
          setModalIsOpen={setModalIsOpen}
          setOpenCommu={setOpenCommu}
          imgSrc={imgSrc}
        />
      ) : (
        <div>
          <div className="flex justify-between mb-5">
            <Edit
              style={{ fontSize: 30, cursor: "pointer" }}
              onClick={() => setEdit(!edit)}
            />
            <Close
              style={{ fontSize: 30, cursor: "pointer" }}
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
          <div className="flex justify-center mb-5">
            {imgSrc && (
              <div className="w-[80%] bg-black flex justify-center items-center drop-shadow">
                <img
                  className="w-[98%] h-[98%]"
                  src={imgSrc}
                  // src="./images/coffee.jpg"
                  alt="pic"
                />
              </div>
            )}
          </div>
          <hr className="border-black border-dashed" />
          <div className="m-5 flex justify-between items-center text-2xl">
            <div className="flex flex-col items-center">
              <span className="font-bold">{modalData.category}</span>
              <span className="text-lg">{modalData.brand}</span>
            </div>
            <span className="font-bold">{price}원</span>
          </div>
          <hr className=" border-black border-dashed" />
          <div className="my-5 flex flex-col gap-3">
            <div className="flex justify-between text-lg">
              {modalData.likeHate && (
                <span className="font-bold">{modalData.likeHate}</span>
              )}
              {modalData.tumbler ? (
                <span>
                  <FontAwesomeIcon icon={faPrescriptionBottle} />
                </span>
              ) : (
                <span className="text-stone-300">
                  <FontAwesomeIcon icon={faPrescriptionBottle} />
                </span>
              )}
              {modalData.taste || modalData.mood || modalData.bean ? (
                <div className="flex gap-1">
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
              ) : null}
            </div>
            <p className="text-lg">{modalData.memo}</p>
          </div>
          <hr className=" border-black border-dashed" />
          <div className="flex justify-center mt-5">
            <button
              className="text-xl text-green-800 font-bold cursor-pointer"
              onClick={() => {
                if (imgSrc) {
                  setOpenCommu(true);
                } else {
                  alert("사진이 있는 지출 내역만 등록이 가능합니다.");
                }
              }}
            >
              커뮤니티 등록
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailInfo;
