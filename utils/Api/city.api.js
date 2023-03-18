import axios from "axios";
import config from "../config";

const getAllCity = async () => {
  const response = await axios.get(`${config.url}/api/listing/city`);
  return response.data;
};

const cityApi = {
  getAllCity,
};
export default cityApi;
