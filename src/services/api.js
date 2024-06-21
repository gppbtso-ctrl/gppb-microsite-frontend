import axios from "axios";
import { Router, useRouter } from "next/router";
import TokenService from "./token.service";
import AuthService from "./auth";
import decode_jwt from "@/utils/decode_jwt";
import useAuthStore from "@/store/authStore";

const apiPrefix = "/gppb-microsite-backend";
const instance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getLocalAccessToken();
    if (token) {
      config.headers["Authorization"] = "Bearer " + token?.access; // for Spring Boot back-end
      //   config.headers["x-access-token"] = token; // for Node.js Express back-end
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  (response) => {
    // If the response status is not 401, proceed with the response
    return response;
  },
  async (error) => {
    // Return the error for further handling
    const originalRequest = error.config;

    // Check if the error is a 401 Unauthorized
    if (error.response && error.response.status === 401) {
      const token = useAuthStore.getState().token;

      if (token) {
        // Perform logout or token removal actions
        await AuthService.logout(); // Assuming AuthService has a logout method to handle logout

        // Optionally redirect to login page or perform any other necessary action
        window.location.href = "/committees";
      }
      else{
        await AuthService.logout();
      }
    }

    console.log(error, "from api");
    return Promise.reject(error);
  }
);

export default instance;
