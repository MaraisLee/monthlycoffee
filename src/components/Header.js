import { Logout } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { GreenBt } from "utils/basicCss";
import { txtShadow } from "utils/colors";
import { logoutAccount } from "reducer/loggedState";
import { removeCookie } from "api/cookie";
import axios from "api/axios";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.user);
  // 카카오 로그아웃
  const kakaoLogOut = () => {
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }

    window.Kakao.Auth.logout(function (res) {});
    // axios
    //   .post("http://192.168.0.203:8080/api/members/logout", {
    //     headers: { Authorization: getCookie("access_token") },
    //   })
    //   .then((res) => {
    //     alert("로그아웃되었습니다.");
    //     // window.location.href='/'
    //     // const uid = res.id;
    //     removeCookie("access_token");
    //     dispatch(logoutAccount());
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //     alert("다시 로그아웃 해주세요.");
    //   });
    alert("로그아웃되었습니다.");
    //     // window.location.href='/'
    //     // const uid = res.id;
    removeCookie("access_token");
    dispatch(logoutAccount());
    navigate("/");
  };

  // 텀블러 랭킹
  const [tumblerRank, setTumblerRank] = useState("");
  const getTumblerRank = async () => {
    const rank = await axios.get("expenses/rank");
    // console.log(rank.data);
    const myRank = rank.data.filter(
      (item) => item.nickname === userData.nickname
    );

    setTumblerRank(myRank[0]);
    console.log(myRank);
    // setLists(expenses[0]);
  };

  useEffect(() => {
    // getTumblerRank();
  }, []);

  let rankColor = null;
  if (tumblerRank.grade === "GrandMaster") {
    rankColor = "green";
  } else if (tumblerRank.grade === "Gold") {
    rankColor = "gold";
  } else if (tumblerRank.grade === "Silver") {
    rankColor = "gray";
  } else if (tumblerRank.grade === "Bronze") {
    rankColor = "brown";
  }
  console.log(tumblerRank.grade);
  return (
    <header className="flex justify-between items-center px-5 w-full h-[15vh] bg-white border-b border-black">
      <div className="flex items-center">
        <div className="flex justify-center md:px-8">
          <img src="./images/logo.png" alt="logo" className="w-[3rem]" />
        </div>
        <div className="flex items-center h-[15vh] pl-7 md:border-l md:border-black">
          <span
            className="hidden md:block text-4xl font-semibold text-white"
            style={{ textShadow: `${txtShadow}` }}
          >
            WELCOME,&nbsp;
          </span>
          <span
            className="text-[2rem] md:text-4xl font-semibold text-yellow-300"
            style={{ textShadow: `${txtShadow}` }}
          >
            {userData.nickname}
          </span>
          <span
            style={{
              color: `${rankColor}`,
              paddingLeft: 15,
              fontSize: 20,
              fontWeight: 600,
              textShadow:
                "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
            }}
          >
            {tumblerRank.grade}
          </span>
        </div>
      </div>
      <div className="flex items-center gap-10">
        <Link to="/addexpense" className="hidden md:block">
          <GreenBt>+ 입력</GreenBt>
        </Link>
        <div
          className="block md:hidden text-xl font-bold cursor-pointer"
          onClick={kakaoLogOut}
        >
          <Logout />
        </div>
        <Link
          to="/edit"
          className="flex justify-center items-center h-20 w-20 border border-green-100  rounded-full mr-7"
        >
          <img
            className="h-full w-full rounded-full "
            src={userData.profileImage}
            alt="pic"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
