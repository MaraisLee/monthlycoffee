import { Edit } from "@mui/icons-material";
import React from "react";
import { txtShadow } from "utils/colors";

const EditInfo = () => {
  return (
    <section className="p-5">
      <span className="text-3xl">
        <Edit />내 정보 수정
      </span>
      <div className="bg-[#E1DBF0] h-[50vh] p-5 space-y-3">
        <div className="flex justify-between px-5 bg-white">
          <span>닉네임</span>
          <span>나몰빼미</span>
        </div>
        <div className="flex justify-between px-5 bg-white">
          <span>이번 달 목표</span>
          <span>150,000원</span>
        </div>
        <div className="text-center text-red-600 px-5 bg-white">
          <span>회원탈퇴</span>
        </div>
      </div>
    </section>
  );
};

export default EditInfo;
