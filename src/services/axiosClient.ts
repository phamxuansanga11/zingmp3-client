import { checkTokenExp } from "./../utils/tokenUtils";
import { BASE_URL } from "./baseUrl";
import axios from "axios";
import { refreshTokenApi } from "./axiosAuthentication";
import { toast } from "react-hot-toast";

// closure: to save the refreshTokenRequest
let refreshTokenRequest: any = null;

const axiosClient = () => {
  const accessToken = localStorage.getItem("accessToken") || "";
  const refreshToken = localStorage.getItem("refreshToken") || "";

  const loadRefreshToken = async () => {
    try {
      const response = await refreshTokenApi({
        refreshToken: refreshToken,
      });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  };

  const axiosOption = axios.create({
    baseURL: BASE_URL,
    headers: {
      "content-type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });
  // Add a request interceptor
  axiosOption.interceptors.request.use(
    async function (config) {
      if (!checkTokenExp(accessToken)) {
        refreshTokenRequest = refreshTokenRequest
          ? refreshTokenRequest
          : loadRefreshToken();
        try {
          const response = await refreshTokenRequest;
          if (response) {
            localStorage.setItem("accessToken", response.data.accessToken);
            config.headers = {
              "content-type": "application/json",
              Authorization: "Bearer " + response.data.accessToken,
            };
            // reset token request for the next expiration
            refreshTokenRequest = null;
          }
        } catch (error: any) {
          refreshTokenRequest = null;
          if (!error.response) {
            toast.error("Không có kết nối đến server!");
          } else if (error?.response?.status === 400) {
            // window.location.replace(pathName.login);
            window.location.replace("/login");
            handleLogout();
            toast.error("Phiên đăng nhập lỗi, vui lòng đăng nhập lại!");
          } else {
            toast.error("Lỗi phiên đăng nhập");
          }
          console.log(error);
        }
        return config;
      }
      return config;
    },

    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );

  // Add a response interceptor
  axiosOption.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      if (error?.response?.status === 401) {
        // window.location.replace(pathName.login);
        window.location.replace("/login");
        handleLogout();
        toast.error("Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại!");
        throw error;
      } else {
        throw error;
      }
    }
  );
  return axiosOption;
};

export default axiosClient;
