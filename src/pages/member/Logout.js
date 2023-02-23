import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutAccount } from "reducer/loggedState";
import { removeCookie } from "api/cookie";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const kakaoLogOut = () => {
    if (!window.Kakao.Auth.getAccessToken()) {
      console.log("Not logged in.");
      return;
    }
    window.Kakao.Auth.logout(function (res) {
      alert("로그아웃되었습니다.");
      // window.location.href='/'
      const uid = res.id;
      removeCookie("access_token");
      removeCookie("refresh_token");
      dispatch(logoutAccount(uid));
      navigate("/");
    });
  };

  const memberOut = () => {
    window.Kakao.API.request({
      url: "/v1/user/unlink",
      success: function (res) {
        console.log(res);
        //callback(); //연결끊기(탈퇴)성공시 서버에서 처리할 함수
        // window.location.href='/'
        removeCookie("access_token");
        removeCookie("refresh_token");
        alert("회원탈퇴되었습니다.");
        const uid = res.id;
        dispatch(logoutAccount(uid));
        navigate("/");
      },
      fail: function (error) {
        console.log("탈퇴 미완료");
        console.log(error);
      },
    });
  };

  return (
    <div>
      <button onClick={kakaoLogOut}>카카오로그아웃</button>
      <button onClick={memberOut}>카카오회원탈퇴</button>
    </div>
  );
};

export default Logout;
