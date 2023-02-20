import axios from "axios";
const instance = axios.create({
  baseURL: "http://192.168.0.203:8080/api/",
  params: {},
});
export default instance;
