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
    <aside className="block w-[20%] p-10 bg-black overflow-y-auto antialiased transition-transform duration-200 -translate-x-full shadow-xl rounded-2xl xl:left-0 xl:translate-x-0">
      <div className="flex justify-center items-center h-[15%]">
        <span className="text-white text-4xl text-center font-semibold">
          MONTHLY <br />
          COFFEE
        </span>
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
      <div>
        <ul className="px-3 py-10 space-y-3">
          <li>
            <NavLink to="/" className="text-white text-2xl">
              <OtherHousesOutlined /> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/addexpense" className="text-white text-2xl">
              <AddOutlined /> Add Expense
            </NavLink>
          </li>
          <li>
            <NavLink to="/expense" className="text-white text-2xl">
              <LibraryBooksOutlined /> Expense Details
            </NavLink>
          </li>
          <li>
            <NavLink to="/expense" className="text-white text-2xl">
              <CalendarMonthOutlined /> Calendar
            </NavLink>
          </li>
          <li>
            <NavLink to="/community" className="text-white text-2xl">
              <ReviewsOutlined /> Community
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
