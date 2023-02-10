import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";

import SidebarLinkGroup from "./SidebarLinkGruop";

const Sidebar = () => {
  return (
    <aside className="block w-[20%] p-10 bg-black overflow-y-auto antialiased transition-transform duration-200 -translate-x-full shadow-xl rounded-2xl xl:left-0 xl:translate-x-0">
      <div className="h-[15%]">
        <span className="ml-1 text-white font-semibold transition-all duration-200 ease-nav-brand">
          Argon Dashboard 2
        </span>
      </div>
      <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" />
      <div>
        <ul className="text-white">
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
          <li>Home</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
