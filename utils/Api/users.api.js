import axios from "axios";
import config from "../config";

const getAllUsers = async (token) => {
  const response = await axios.get(`${config.url}/api/user`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
const addNewUser = async (body, token) => {
  const response = await axios.post(`${config.url}/api/user`, body, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const userApi = {
  getAllUsers,
  addNewUser,
};
export default userApi;
