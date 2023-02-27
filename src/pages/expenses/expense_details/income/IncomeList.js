import React, { useState } from "react";
import EditIncome from "./EditIncome";
import IncomeInfo from "./IncomeInfo";

const IncomeList = ({ item, updateBt, setUpdateBt }) => {
  const [editIn, setEditIn] = useState(false);
  return (
    <>
      {editIn ? (
        <EditIncome
          item={item}
          updateBt={updateBt}
          setUpdateBt={setUpdateBt}
          editIn={editIn}
          setEditIn={setEditIn}
        />
      ) : (
        <IncomeInfo
          item={item}
          updateBt={updateBt}
          setUpdateBt={setUpdateBt}
          editIn={editIn}
          setEditIn={setEditIn}
        />
      )}
    </>
  );
};

export default IncomeList;
