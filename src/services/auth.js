import api from "./api";
import TokenService from "./token.service";
const apiPrefix = "/gppb-microsite-backend";

const register = (params) => {
  return api.post(`${apiPrefix}/user/register`, params);
};

const login = async (params) => {
  const response = await api.post(`${apiPrefix}/token/`, params);
  if (response?.data) {
    TokenService.setUser(response.data);
  }
  return response;
  s;
};

const logout = async () => {
  TokenService.removeUser();
  return await api.post(`${apiPrefix}/logout/`).then((response) => {
    return response;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
