import React from "react";
import moment from "moment";
import { txtShadow } from "utils/colors";

import Calender from "pages/calender/Calendar";

const Monthly = () => {
  return (
    <div className="flex items-center bg-[#F8F8E5] text-center border border-black md:col-span-2 md:row-span-4">
      {/* <span
          className="text-white text-4xl font-bold"
          style={{ textShadow: `${txtShadow}` }}
        >
          이달의 커피
        </span> */}
      <Calender />
    </div>
  );
};

export default Monthly;
