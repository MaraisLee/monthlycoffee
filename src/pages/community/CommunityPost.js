import React, { useEffect, useState } from "react";
import { Favorite } from "@mui/icons-material";
import axios from "api/axios";

const CommunityPost = ({ item, like, setModalIsOpen, setListDetail }) => {
  // console.log(item);
  const [imgSrc, setImgSrc] = useState("");
  const getImg = async () => {
    // console.log(modalData.images.length);
    const imgName = item.images[0].filename;
    await axios
      .get(`expenses/image/${imgName}`, {
        headers: { "Content-type": "application/json; charset=UTF-8" },
        responseType: "blob",
        timeout: 5000,
      })
      .then((res) => {
        // console.log(res.data);
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
  };
  useEffect(() => {
    getImg();
  }, []);

  return (
    <div
      className="relative w-[17vw] h-[17vw] group cursor-pointer"
      onClick={() => {
        setListDetail({
          id: item.id,
          src: imgSrc,
          likeNumber: item.likeNumber,
        });
        setModalIsOpen(true);
      }}
    >
      <img
        className="absolute inset-0 w-full h-full transition duration-500"
        src={imgSrc}
        // src="./images/coffee.jpg"
        alt="pic"
      />
      <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 group-hover:bg-black/40 transition duration-600">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
          <span className="text-red-500">
            <Favorite />
          </span>
          <span className="text-gray-200 drop-shadow-lg">
            &nbsp;{item.likeNumber}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CommunityPost;
