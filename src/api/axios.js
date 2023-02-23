import axios from "axios";
import { getCookie } from "./cookie";

const instance = axios.create({
  baseURL: "http://192.168.0.203:8080/api/",
  params: {},
  headers: { authorization: getCookie("is_login") },
});

instance.defaults.withCredentials = true;
export default instance;
