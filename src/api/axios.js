import axios from "axios";
import { getCookie, removeCookie, setCookie } from "./cookie";

const instance = axios.create({
  baseURL: "http://192.168.0.203:8080/api/",
  params: {},
  // timeout: 2500,
  headers: { Authorization: getCookie("access_token") },
});

// instance.interceptors.response.use(
//   (res) => {
//     return res;
//   },
//   async (error) => {
//     // response에서 error가 발생했을 경우 catch로 넘어가기 전에 처리
//     try {
//       const errResponseData = error.response.data;
//       const prevRequest = error.config;
//       // access token이 만료되어 발생하는 에러인 경우
//       if (
//         errResponseData.error?.message === "The access token expired" ||
//         errResponseData.error?.status === "401 UNAUTHORIZED"
//       ) {
//         console.log("오류넘어오니", errResponseData.error?.message);
//         const preRefreshToken = getCookie("refresh_token");
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
//                 setCookie("refresh_token", { refreshToken });
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
//                 removeCookie("access_token");
//                 removeCookie("refresh_token");
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
