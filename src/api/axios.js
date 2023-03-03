import axios from "axios";
import { getCookie, setCookie } from "./cookie";
const instance = axios.create({
  baseURL: "http://192.168.0.203:8080/api/",
  headers: { Authorization: getCookie("access_token") },
});

// 2분(120초) 간격으로 토큰 갱신
setInterval(() => {
  const refreshToken = localStorage.getItem("refresh_token");
  axios
    .post("http://192.168.0.203:8080/api/reissue_token", {
      RefreshToken: refreshToken,
    })
    .then((res) => {
      setCookie("access_token", res.headers.authorization);
      localStorage.setItem("refresh_token", res.headers.refreshtoken);
      instance.defaults.headers.common["Authorization"] =
        res.headers.authorization;
    })
    .catch((err) => {
      console.log(err);
    });
}, 120000);

// const refreshAccessToken = async () => {
//   try {
//     const refreshToken = localStorage.getItem("refresh_token");
//     const response = await axios.post(
//       "http://192.168.0.203:8080/api/reissue_token",
//       { RefreshToken: refreshToken },
//       {
//         headers: {
//           Authorization: getCookie("access_token"),
//           RefreshToken: refreshToken,
//         },
//       }
//     );
//     setCookie("access_token", response.headers.authorization);
//     localStorage.setItem("refresh_token", response.headers.refreshtoken);
//     instance.defaults.headers.common["Authorization"] =
//       getCookie("access_token");
//     console.log("토큰 갱신");
//   } catch (error) {
//     console.log(error);
//   }
// };

// setInterval(refreshAccessToken, 1200000); // 2분(120초) 간격으로 토큰 갱신

instance.defaults.withCredentials = true;

export default instance;
