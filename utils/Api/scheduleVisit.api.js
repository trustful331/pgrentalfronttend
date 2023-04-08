import axios from "axios";
import config from "../config";

const getAllScheduleVisits = async (token) => {
  const response = await axios.get(`${config.url}/api/listing/scheduleVisit`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
const addNewRoomType = async (body, token) => {
  const response = await axios.post(
    `${config.url}/api/listing/roomType`,
    body,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

const scheduleVisitApi = {
  getAllScheduleVisits,
  addNewRoomType,
};
export default scheduleVisitApi;
