import Budget from "components/home/card/Budget";
import CategoryStats from "components/home/card/CategoryStats";
import MenuStats from "components/home/card/MenuStats";
import MonExpend from "components/home/card/MonExpend";
import Weekly from "components/home/card/Weekly";
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
