import { Clear } from "@mui/icons-material";
import axios from "api/axios";
import React from "react";

const Comment = ({ item, update, setUpdate }) => {
  const deleteComment = async () => {
    if (window.confirm("삭제하시겠습니까?")) {
      await axios
        .delete(`comments/${item.id}`)
        .then((res) => {
          console.log(res);
          setUpdate(++update);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div className="w-full flex justify-between items-center px-5">
      <div className="space-x-2">
        <span className="font-bold">{item.nickname}</span>
        <span>{item.content}</span>
      </div>
      <Clear
        style={{ fontSize: "13px", cursor: "pointer" }}
        onClick={deleteComment}
      />
    </div>
  );
};

export default Comment;
