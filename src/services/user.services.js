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
  const response = api.post(
    `${apiPrefix}/user-action?id=${id}&action=${action}`
  );

  return response;
};

const calendarActDelete = (id) => {
  const response = api.delete(`${apiPrefix}/calendar-activity/${id}`);

  return response;
};

const addCalendarAct = (id, data) => {
  const response = api.post(`${apiPrefix}/calendar-activities/${id}`, data);

  return response;
};

const getComCalendarActivities = (id, year) => {
  const response = api.get(`${apiPrefix}/get-calendar-activities/${id}?year=${year}`);
  return response;
};

const getComListOfMembers = (id) => {
  const response = api.get(`${apiPrefix}/instance-committee-users?id=${id}`);
  return response;
};

const search = (value) => {
  const response = api.get(`${apiPrefix}/search?search=${value}`);
  return response;
};

const getProfile = () => {
  const response = api.get(`${apiPrefix}/edit-profile`);
  return response;
};

const editProfile = (data) => {
  const response = api.patch(`${apiPrefix}/edit-profile`, data);
  return response;
};




const UserService = {
  getCommittees,
  getComTopics,
  getTopicComments,
  postTopic,
  postComment,
  getUsers,
  postUserAction,
  getComCalendarActivities,
  calendarActDelete,
  addCalendarAct,
  getComListOfMembers,
  search,
  getProfile,
  editProfile
};

export default UserService;
