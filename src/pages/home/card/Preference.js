import React, { useEffect, useState } from "react";
import { txtShadow } from "utils/colors";
import axios from "api/axios";

const Preference = () => {
  const [memo, setMemo] = useState("");
  const getPost = async () => {
    await axios
      .get("expenses/preference")
      .then((res) => setMemo(res.data.message))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getPost();
  }, []);
  return (
    <div className="flex justify-center items-center bg-[#F8F8E5] p-10 border border-black md:row-span-2">
      <span className="text-xl text-[#272e56] font-semibold drop-shadow-sm">{memo}</span>
    </div>
  );
};

export default Preference;
