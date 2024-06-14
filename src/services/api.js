import axios from "axios";
import { Router, useRouter } from "next/router";
import TokenService from "./token.service";
import AuthService from "./auth";
import decode_jwt from "@/utils/decode_jwt";

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
    return Promise.reject(error);
  }
);

export default instance;
