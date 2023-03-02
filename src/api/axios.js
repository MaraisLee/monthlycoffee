import axios from "axios";
import { getCookie, setCookie } from "./cookie";
const instance = axios.create({
  baseURL: "http://192.168.0.203:8080/api/",
  headers: { Authorization: getCookie("access_token") },
});
// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (error.response.status === 403) {
//       originalRequest._retry = true;
//       const refreshToken = localStorage.getItem("refresh_token");
//       try {
//         const response = await axios.post(
//           `${baseURL}/reissue_token`,
//           { RefreshToken: refreshToken },
//           {
//             headers: {
//               Authorization: getCookie("access_token"),
//               RefreshToken: refreshToken,
//             },
//           }
//         );
//         setCookie("access_token", response.headers.authorization);
//         localStorage.setItem("refresh_token", response.headers.refreshtoken);
//         instance.defaults.headers.common["Authorization"] =
//           response.headers.authorization;
//         return instance(originalRequest);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     return Promise.reject(error);
//   }
// );
// 2분(120초) 간격으로 토큰 갱신
setInterval(() => {
  const refreshToken = localStorage.getItem("refresh_token");
  axios
    .post(
      "http://192.168.0.203:8080/api/reissue_token",
      { RefreshToken: refreshToken },
      {
        headers: {
          Authorization: getCookie("access_token"),
          RefreshToken: refreshToken,
        },
      }
    )
    .then((res) => {
      setCookie("access_token", res.headers.authorization);
      localStorage.setItem("refresh_token", res.headers.refreshtoken);
      instance.defaults.headers.common["Authorization"] =
        res.headers.authorization;
      console.log("토큰 갱신");
    })
    .catch((err) => {
      console.log(err);
    });
}, 120000);
instance.defaults.withCredentials = true;
export default instance;
