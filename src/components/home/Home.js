import React from "react";
import Card1 from "./card/Card1";

const Home = () => {
  return (
    <section className="h-[74vh] m-[3vh]">
      <div className="grid h-full grid-cols-3 gap-4">
        <Card1 />
        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          2
        </div>
        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          3
        </div>
        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          4
        </div>
        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          5
        </div>
        <div className="bg-green-100 text-green-500 text-lg font-bold text-center p-10 rounded-lg">
          6
        </div>
      </div>
    </section>
  );
};

export default Home;
