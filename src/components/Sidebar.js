import {
  AddOutlined,
  CalendarMonthOutlined,
  LibraryBooksOutlined,
  Logout,
  OtherHousesOutlined,
  ReviewsOutlined,
} from "@mui/icons-material";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logoutAccount } from "reducer/loggedState";

const Sidebar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const kakaoLogOut = () => {
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    if (window.confirm("로그아웃 하시겠습니까?")) {
      window.Kakao.Auth.logout(function (res) {
        alert("로그아웃되었습니다.");
        // window.location.href='/'
        const uid = res.id;
        dispatch(logoutAccount(uid));
        navigate("/");
      });
    }
  };
  return (
    <div className="relative">
      <aside className="flex z-10 md:fixed md:flex-col justify-around md:justify-start items-center h-[5vh] md:h-screen md:w-[20%] p-10 bg-black shadow-xl">
        <Link
          to="/home"
          className="hidden md:block justify-center text-center my-10"
        >
          <span className="text-white text-4xl font-semibold">
            MONTHLY <br />
            COFFEE
          </span>
        </Link>
        <hr className="hidden md:block bg-white w-full" />
        {/* <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:from-transparent dark:via-white dark:to-transparent" /> */}
        <div className="flex md:flex-col justify-around md:justify-center w-full md:py-10 lg:pl-5 md:space-y-5 tracking-tighter lg:text-[1.3vw]">
          <NavLink to="/home" className="flex text-white">
            <span>
              <OtherHousesOutlined />
            </span>
            <span className="hidden md:block">&nbsp;Home</span>
          </NavLink>
          <NavLink to="/expense" className="flex text-white">
            <span>
              <LibraryBooksOutlined />
            </span>
            <span className="hidden md:block">&nbsp;Expense Details</span>
          </NavLink>
          <NavLink to="/addexpense" className="text-white block md:hidden">
            <AddOutlined />
          </NavLink>
          <NavLink to="/calendar" className="flex text-white">
            <span>
              <CalendarMonthOutlined />
            </span>
            <span className="hidden md:block">&nbsp;Calendar</span>
          </NavLink>
          <NavLink to="/community" className="flex text-white">
            <span>
              <ReviewsOutlined />
            </span>
            <span className="hidden md:block">&nbsp;Community</span>
          </NavLink>
        </div>
        <div
          className="absolute bottom-10 right-10 text-lg font-bold text-white cursor-pointer"
          onClick={kakaoLogOut}
        >
          Logout <Logout style={{ fontSize: "2vw" }} />
        </div>
      </aside>
    </div>
  );
};
export default Sidebar;
