import Budget from "pages/home/card/Budget";
import CategoryStats from "pages/home/card/CategoryStats";
import MenuStats from "pages/home/card/MenuStats";
import MonExpend from "pages/home/card/MonExpend";
import Weekly from "pages/home/card/Weekly";
import React from "react";

const Statistics = () => {
  return (
    <>
      <Budget />
      <MonExpend />
      <Weekly />
      <CategoryStats />
      <MenuStats />
    </>
  );
};

export default Statistics;
