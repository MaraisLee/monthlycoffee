import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";

const CommuLike = ({ likeData, postLikes, like }) => {
  return (
    <p className="text-2xl">
      <span
        className="text-red-600 text-2xl cursor-pointer"
        onClick={postLikes}
      >
        {like ? <Favorite /> : <FavoriteBorder />}
      </span>
      &nbsp; {likeData.likeNumber}
    </p>
  );
};

export default CommuLike;
