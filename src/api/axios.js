import axios from "axios";
import { getCookie, setCookie } from "./cookie";
const instance = axios.create({
  baseURL: "http://192.168.0.203:8080/api/",
  headers: { Authorization: getCookie("access_token") },
});
// const refreshToken = localStorage.getItem("refresh_token");
// API 요청 시, 인증이 필요한 경우 interceptor를 추가하여 갱신된 토큰으로 요청 보내기
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const originalRequest = error.config;
//     const errResponseData = error.response.data.error;
//     console.log("에러:", errResponseData);
//     if (
//       errResponseData === "TokenExpiredException" ||
//       errResponseData === "BlackedTokenException" ||
//       !originalRequest._retry
//     ) {
//       // originalRequest._retry = true;
//       const refreshToken = localStorage.getItem("refresh_token");
//       console.log("왔냐");
//       console.log("리프레시", refreshToken);
//       return axios
//         .post(
//           "http://192.168.0.203:8080/api/reissue_token",
//           // { RefreshToken: refreshToken },
//           {
//             headers: {
//               // accept: "application/json",
//               Authorization: getCookie("access_token"),
//               RefreshToken: refreshToken,
//             },
//           }
//         )
//         .then((res) => {
//           // 갱신된 access token 저장
//           console.log("뉴엑세스토큰", res.headers.authorization);
//           console.log("뉴리프레시토큰", res.headers.refreshtoken);
//           setCookie("access_token", res.headers.authorization);
//           localStorage.setItem("refresh_token", res.headers.refreshtoken);
//           // 요청 헤더에 갱신된 access token 추가
//           console.log("쿠키", res);
//           instance.defaults.headers.common["Authorization"] =
//             res.headers.authorization;
//           // alert("새로고침해주세요");
//           // 갱신된 access token으로 재요청
//           return instance(originalRequest);
//         })
//         .catch((err) => {
//           console.log(err);
//           // alert("안됨..");
//         });
//     }
//     return Promise.reject(error);
//   }
// );

// 1분(60초) 간격으로 토큰 갱신
// setInterval(() => {
//   const refreshToken = localStorage.getItem("refresh_token");
//   axios
//     .post("http://192.168.0.203:8080/api/reissue_token", {
//       headers: {
//         Authorization: getCookie("access_token"),
//         RefreshToken: refreshToken,
//       },
//     })
//     .then((res) => {
//       setCookie("access_token", res.headers.authorization);
//       localStorage.setItem("refresh_token", res.headers.refreshtoken);
//       instance.defaults.headers.common["Authorization"] =
//         res.headers.authorization;
//       alert("토큰 갱신");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }, 60000);

// API 요청 보내기
// instance
//   .get("/api/some/data")
//   .then((res) => {
//     // 요청이 성공한 경우
//   })
//   .catch((error) => {
//     // 요청이 실패한 경우
//   });
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     // response에서 error가 발생했을 경우 catch로 넘어가기 전에 처리
//     try {
//       const errResponseData = error.response.data.error;
//       const prevRequest = error.config;
//       // access token이 만료되어 발생하는 에러인 경우
//       console.log("errres.data: ", errResponseData);
//       console.log("prevRequest: ", prevRequest);
//       if (errResponseData === "TokenExpiredException") {
//         console.log("오류넘어오니", errResponseData);
//         const preRefreshToken = localStorage.getItem("refresh_token");
//         if (preRefreshToken) {
//           // refresh token을 이용하여 access token 재발급
//           async function regenerateToken() {
//             return await axios
//               .post("http://192.168.0.203:8080/api/reissue-token", {
//                 headers: {
//                   RefreshToken: preRefreshToken,
//                 },
//               })
//               .then(async (res) => {
//                 console.log("결과", res);
//                 // 새로 받은 token들 저장
//                 const accessToken = res.headers.authorization;
//                 const refreshToken = res.headers.refreshtoken;
//                 setCookie("access_token", { accessToken });
//                 localStorage.setItem("refresh_token", refreshToken);
//                 // header 새로운 token으로 재설정
//                 prevRequest.headers.Authorization = { accessToken };
//                 // 실패했던 기존 request 재시도
//                 return await axios(prevRequest);
//               })
//               .catch((e) => {
//                 /*
//                  token 재발행 또는 기존 요청 재시도 실패 시
//                  기존 token 제거
//                  */
//                 // removeCookie("access_token");
//                 window.location.href = "/";
//                 return new Error(e);
//               });
//           }
//           return await regenerateToken();
//         } else {
//           throw new Error("There is no refresh token");
//         }
//       }
//     } catch (e) {
//       // 오류 내용 출력 후 요청 거절
//       return Promise.reject(e);
//     }
//   }
// );
instance.defaults.withCredentials = true;
export default instance;
