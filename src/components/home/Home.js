import React from "react";
import MonExpend from "./card/MonExpend";
import Weekly from "./card/Weekly";

const Home = () => {
  return (
    <section className="p-5">
      <div className="grid grid-cols-1 grid-rows-1 md:grid-cols-3 md:grid-rows-5 gap-4">
        <Weekly />
        <div className="bg-[#F8F8E5] text-green-500 text-lg font-bold text-center p-10 border border-black md:row-span-1">
          2
        </div>
        <MonExpend />
        <div className="bg-[#F8F8E5] text-green-500 text-lg font-bold text-center p-10 border border-black md:row-span-2">
          4
        </div>
        <div className="bg-[#F8F8E5] text-green-500 text-lg font-bold text-center p-10 border border-black md:row-span-2">
          5
        </div>
        <div className="bg-[#F8F8E5] text-green-500 text-lg font-bold text-center p-10 border border-black md:row-span-2">
          6
        </div>
      </div>
    </section>
  );
};

export default Home;
