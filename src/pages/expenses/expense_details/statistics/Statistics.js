import Budget from "pages/home/card/Budget";

import MonExpend from "pages/home/card/MonExpend";
import Weekly from "pages/home/card/Weekly";
import React from "react";
import ExpCategoryStats from "./ExpCategoryStats";
import ExpMenuStats from "./ExpMenuStats";

const Statistics = () => {
  return (
    <>
      <Budget />
      <MonExpend />
      {/* <Weekly /> */}
      <ExpCategoryStats />
      <ExpMenuStats />
    </>
  );
};

export default Statistics;
