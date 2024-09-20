import useAuthStore from "@/store/authStore";
import api from "./api";
import TokenService from "./token.service";
const apiPrefix = "/gppb-microsite-backend";

const register = (params) => {
  return api.post(`${apiPrefix}/user/register`, params);
};

const validateEmail = (params) => {
  const response = api.post(`${apiPrefix}/validate-email`, params);
  return response;
};

const verifyEmail = (params) => {
  const response = api.post(`${apiPrefix}/verify-email/${params}`);
  return response;
};

const login = async (params) => {
  const response = await api.post(`${apiPrefix}/token/`, params);
  const token = response?.data ?? null;
  if (token) {
    TokenService.setUser(response.data);
    useAuthStore.getState().setToken();
  }
  return response;
};

const changePassword = (params) => {
  const response = api.put(`${apiPrefix}/change-password`, params);
  return response;
};

const getEmailForgotPassword = (data) => {
  const response = api.post(`${apiPrefix}/get_email_for_password`, data);
  return response;
};

const getForgotPasswordVerification = (code) => {
  const response = api.get(`${apiPrefix}/forgot-password-verification/${code}`);
  return response;
};

const postNewPassword = (code, data) => {
  const response = api.post(
    `${apiPrefix}/forgot-password-verification/${code}`,
    data
  );
  return response;
};

const logout = async () => {
  TokenService.removeUser();
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  postNewPassword,
  getEmailForgotPassword,
  register,
  login,
  logout,
  getCurrentUser,
  validateEmail,
  verifyEmail,
  changePassword,
  getForgotPasswordVerification,
};

export default AuthService;
