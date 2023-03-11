import axios from "axios";
import config from "../config";

const loginHandlerApi = async (body) => {
  const response = await axios.post(`${config.url}/login`, body);
  return response.data;
};

const authApi = {
  loginHandlerApi,
};
export default authApi;
