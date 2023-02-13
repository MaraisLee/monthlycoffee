import {
  AddOutlined,
  CalendarMonthOutlined,
  LibraryBooksOutlined,
  OtherHousesOutlined,
  ReviewsOutlined,
} from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    // <aside className="md:w-[20%] p-10 bg-black overflow-y-auto antialiased transition-transform duration-200 -translate-x-full shadow-xl rounded-2xl xl:left-0 xl:translate-x-0">
    <aside className="flex md:flex-col justify-around md:justify-start items-center h-[5vh] md:h-full md:relative md:w-[20%] p-10 bg-black shadow-xl md:rounded-2xl">
      <div className="hidden md:block justify-center items-center h-[15%]">
        <span className="text-white text-4xl text-center font-semibold">
          MONTHLY <br />
          COFFEE
        </span>
      </div>
      <hr className="hidden md:block bg-white w-full" />
      {/* <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" /> */}
      <div className="flex md:flex-col w-full justify-around md:py-10 md:space-y-3">
        <NavLink to="/" className="flex text-white">
          <OtherHousesOutlined />
          <span className="hidden md:block">&nbsp;Home</span>
        </NavLink>
        <NavLink to="/expense" className="flex text-white">
          <LibraryBooksOutlined />
          <span className="hidden md:block">&nbsp;Expense Details</span>
        </NavLink>
        <NavLink to="/addexpense" className="flex md:hidden text-white">
          <AddOutlined />
          <span className="hidden md:block">&nbsp;Add Expense</span>
        </NavLink>
        <NavLink to="/expense" className="flex text-white">
          <CalendarMonthOutlined />
          <span className="hidden md:block">&nbsp;Calendar</span>
        </NavLink>
        <NavLink to="/community" className="flex text-white">
          <ReviewsOutlined />
          <span className="hidden md:block">&nbsp;Community</span>
        </NavLink>
      </div>
    </aside>
  );
};

export default Sidebar;
