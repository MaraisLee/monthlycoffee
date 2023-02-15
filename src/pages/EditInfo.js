import { Edit } from "@mui/icons-material";
import React from "react";
import { txtShadow } from "utils/colors";

const EditInfo = () => {
  return (
    <div className="p-5">
      <span
        className="text-4xl ml-5 font-bold"
        style={{ textShadow: `${txtShadow}` }}
      >
        <Edit />
        <span className="text-yellow-400">&nbsp;내 정보 수정</span>
      </span>
      <div className="bg-[#F8F8E5] block w-[94vw] md:w-[75vw] p-5 text-3xl font-bold mt-5 space-y-5 rounded-lg">
        <div className="flex justify-between px-24 py-7 bg-white border border-black">
          <span>닉네임</span>
          <span>나몰빼미</span>
        </div>
        <div className="flex justify-between px-24 py-7 bg-white border border-black">
          <span>이번 달 목표</span>
          <span>150,000원</span>
        </div>
        <div className="text-center text-red-600 py-7 bg-white border border-black">
          <span>회원탈퇴</span>
        </div>
      </div>
    </div>
  );
};

export default EditInfo;
