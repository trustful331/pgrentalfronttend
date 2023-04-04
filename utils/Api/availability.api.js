import axios from "axios";
import config from "../config";

const addNewAvailability = async (body, token) => {
  const response = await axios.post(
    `${config.url}/api/listing/availability`,
    body,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const availabilityApi = {
  addNewAvailability,
};
export default availabilityApi;
