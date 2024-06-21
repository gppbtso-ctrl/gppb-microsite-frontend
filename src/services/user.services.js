import api from "./api";
const baseURL = process.env.BASE_URL;
const apiPrefix = "/gppb-microsite-backend";

const getCommittees = () => {
  const response = api.get(`${apiPrefix}/committee`);
  return response;
};

const getComTopics = (id) => {
  const response = api.get(`${apiPrefix}/committee/${id}`);
  return response;
};

const getTopicComments = (id) => {
  const response = api.get(`${apiPrefix}/topic/${id}`);
  return response;
};

const postTopic = (params) => {
  const response = api.post(`${apiPrefix}/topic`, params);
  return response;
};

const postComment = (params) => {
  const response = api.post(`${apiPrefix}/post`, params);
  return response;
};


const getUsers = () => {
  const response = api.get(`${apiPrefix}/users?for_activation=${"false"}`);
  return response;
};

const postUserAction = (id, action) => {
  const response = api.post(`${apiPrefix}/user-action?id=${id}&action=${action}`);

  return response;
};


const UserService = {
  getCommittees,
  getComTopics,
  getTopicComments,
  postTopic,
  postComment,
  getUsers,
  postUserAction
};

export default UserService;
