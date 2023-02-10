import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const active = { color: "white" };
  return (
    <aside className="block w-[20%] p-10 bg-black overflow-y-auto antialiased transition-transform duration-200 -translate-x-full shadow-xl rounded-2xl xl:left-0 xl:translate-x-0">
      <div className="h-[15%]">
        <span className="ml-1 text-white font-semibold transition-all duration-200 ease-nav-brand">
          MONTHLY COFFEE
        </span>
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
      <div>
        <ul>
          <li>
            <NavLink style={{ color: "white" }} activeStyle={active} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: "white" }}
              activeStyle={active}
              to="/addexpense"
            >
              Add Expense
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: "white" }}
              activeStyle={active}
              to="/expense"
            >
              Expense Details
            </NavLink>
          </li>
          <li>
            <NavLink
              style={{ color: "white" }}
              activeStyle={active}
              to="/community"
            >
              Community
            </NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
