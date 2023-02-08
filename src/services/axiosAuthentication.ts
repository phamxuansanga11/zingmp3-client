import { BASE_URL } from "./baseUrl";
import axios from "axios";

export const refreshTokenApi = async (params: any) => {
  return axios({
    method: "POST",
    url: BASE_URL,
    headers: {
      "Content-Type": "text/plain",
    },
    data: params.refreshToken,
  })
    .then((res) => res)
    .catch((err) => err);
};
