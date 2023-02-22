import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginAccount } from "reducer/loggedState";
import { useSelector } from "react-redux";
import axios from "api/axios";
import { setCookie } from "api/cookie";

const Login = () => {
  const path = process.env.PUBLIC_URL;
  const dispatch = useDispatch();
  const authenticated = useSelector((state) => state.user.authenticated);
  // Kakao 로그인
  // 등록된 앱의 JavaScript key
  const jsKey = process.env.REACT_APP_KAKAO;

  // SDK는 한 번만 초기화해야 한다.
  // 중복되는 초기화를 막기 위해 isInitialized()로 SDK 초기화 여부를 판단한다.
  if (!window.Kakao.isInitialized()) {
    // JavaScript key를 인자로 주고 SDK 초기화
    window.Kakao.init(jsKey);
    // SDK 초기화 여부를 확인하자.
    console.log(window.Kakao.isInitialized());
  }
  const navigate = useNavigate();
  const kakaoLogin = () => {
    window.Kakao.Auth.login({
      scope: "profile_nickname, profile_image, account_email", //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
      success: function (response) {
        // console.log(response); // 로그인 성공하면 받아오는 데이터
        window.Kakao.API.request({
          // 사용자 정보 가져오기
          url: "/v2/user/me",
          success: (res) => {
            // const uid = res.id;
            // console.log("사용자 id", uid);
            // const kakao_account = res.kakao_account;
            // console.log("사용자 정보", kakao_account);
            console.log("카카오", res);

            const body = {
              uid: res.id,
              nickname: res.properties.nickname,
              authDomain: "KAKAO",
            };
            console.log(body);
            axios
              .post("members", body)
              .then((res) => {
                console.log("성공", res.headers.authorization);
                const accessToken = res.headers.authorization;
                // const refreshToken = res.headers.refreshToken;
                // console.log(refreshToken)
                setCookie("is_login", `${accessToken}`);
                // dispatch(loginAccount(res.headers.refresh - token));
                alert(`${res.data.nickname} 님 환영합니다.`);
                navigate("/home");
              })
              .catch((err) => {
                console.log(err);
                alert("로그인에 실패하였습니다.");
              });
            dispatch(loginAccount(res));
          },
        });
      },
      fail: function (error) {
        console.log(error);
      },
    });
  };

  useEffect(() => {
    if (authenticated) {
      navigate("/home");
    }
  }, []);

  return (
    <>
      <div className="flex w-screen h-screen justify-center">
        <div className=" bg-black w-full flex-1 h-full justify-center">
          <div className="flex h-full justify-center items-center">
            <img src="./images/logo.png" alt="logo" className="w-44" />
            <span className="text-white text-6xl font-semibold ">
              MONTHLY <br />
              COFFEE
            </span>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col h-full justify-center items-center">
            <span className="text-3xl font-bold mb-20">
              “The cafe is the community’s
              <br /> third place.”
            </span>
            <button onClick={kakaoLogin}>
              <img src={`${path}/images/kakao.png`} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
