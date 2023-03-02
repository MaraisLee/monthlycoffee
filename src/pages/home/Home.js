import React from "react";
import Budget from "./card/Budget";
import CategoryStats from "./card/CategoryStats";
import MenuStats from "./card/MenuStats";
import MonExpend from "./card/MonExpend";
import Monthly from "./card/Monthly";
import MyCard from "./card/MyCard";
import Preference from "./card/Preference";
import Weekly from "./card/Weekly";

const Home = () => {
  return (
    <div className="grid grid-cols-1 grid-rows-1 w-[96%] h-[85vh] py-[2%] md:grid-cols-3 md:grid-rows-6 gap-4">
      <Monthly />
      <Budget />
      {/* <Preference /> */}
      <MonExpend />
      {/* <Weekly /> */}
      <CategoryStats />
      <MenuStats />
      <MyCard />
    </div>
  );
};

export default Home;
