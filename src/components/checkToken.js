// import { AxiosRequestConfig } from "axios";
// import axios from "api/axios";
// import { getCookie } from "../api/cookie";
// import * as jwt from "jsonwebtoken";

// const axiosApiInstance = axios.create();

// //Request interceptor for API calls
// axiosApiInstance.interceptors.request.use(
//   async (config) => {
//     const userInfo = window.sessionStorage.getItem("userInfo");
//     const accessToken = userInfo ? JSON.parse(userInfo).accessToken : null;
//     config.headers = {
//       authorization: `Bearer ${accessToken}`,
//       Accept: "application/json",
//     };
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

// export const checkToken = async ({ AxiosRequestConfig }) => {
//   let accessToken = getCookie("is_login");
//   const decode = jwt.decode(accessToken);
//   const nowDate = new Date().getTime() / 1000;

//   // 토큰 만료시간이 지났다면
//   if (decode.exp < nowDate) {
//     const { data } = await axios.post(
//       "reissue-token",
//       { accessToken },
//       {
//         headers: {
//           access_token: getCookie(),
//         },
//       }
//     );
//     // 리프레쉬 토큰 발급 서버 요청

//     const { refreshToken } = data.data;

//     accessToken = refreshToken;
//   }

//   AxiosRequestConfig.headers["access_token"] = accessToken;
//   return AxiosRequestConfig;
// };
// axios.interceptors.request.use(checkToken);
