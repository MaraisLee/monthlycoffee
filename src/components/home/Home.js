import React from "react";
import Budget from "./card/Budget";
import CategoryStats from "./card/CategoryStats";
import MenuStats from "./card/MenuStats";
import MonExpend from "./card/MonExpend";
import MyCard from "./card/MyCard";
import Weekly from "./card/Weekly";

const Home = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-[96%] py-[2%] md:grid-cols-3 md:grid-rows-5 gap-4">
      <Weekly />
      <Budget />
      <MonExpend />
      <CategoryStats />
      <MenuStats />
      <MyCard />
    </div>
  );
};

export default Home;
