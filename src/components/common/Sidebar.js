import React from "react";
import { Sidebar } from "styles/common/SidebarCss";

const SideBar = () => {
  return (
    <Sidebar>
      <div className="wrapper">
        <div className="menu">
          <h3>Monthly Coffee</h3>
          <ul>
            <li>Home</li>
            <li>수입/지출내역</li>
          </ul>
        </div>
      </div>
    </Sidebar>
  );
};

export default SideBar;
