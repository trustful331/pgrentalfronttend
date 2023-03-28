import axios from "axios";
import config from "../config";

const getAllListing = async () => {
  const response = await axios.get(`${config.url}/api/listing`);
  return response.data;
};
const addNewListing = async (body, token) => {
  const response = await axios.post(`${config.url}/api/listing`, body, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

const listingApi = {
  getAllListing,
  addNewListing,
};
export default listingApi;
