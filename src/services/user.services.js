import api from "./api";
const baseURL = process.env.BASE_URL;
const apiPrefix = "/gppb-microsite-backend";

const getCommittees = () => {
  const response = api.get(`${apiPrefix}/committee`);
  return response;
};

const getComTopics = (id,page=1) => {
  const response = api.get(`${apiPrefix}/committee/${id}?page=${page}`);
  return response;
};

const getTopicComments = (id, page) => {
  const response = api.get(`${apiPrefix}/topic/${id}?page=${page}`);
  return response;
};

const postTopic = (params) => {
  const response = api.post(`${apiPrefix}/topic`, params);
  return response;
};
const editTopic = (data, topic_id) => {
  const response = api.patch(`${apiPrefix}/topic/${topic_id}`, data);
  return response;
};

const getTopic = ( topic_id) => {
  const response = api.get(`${apiPrefix}/topic/${topic_id}`);
  return response;
};


const postComment = (params) => {
  const response = api.post(`${apiPrefix}/post`, params);
  return response;
};

const getUsers = (page, searchTerm, statusList, to_csv) => {
  const response = api.get(`${apiPrefix}/users?status_list=${statusList}&searchTerm=${searchTerm}&page=${page}&to_csv=${to_csv}`);
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

const addCalendarAct = (id, data, add_to_all) => {
  const response = api.post(`${apiPrefix}/calendar-activities/${id}?add_to_all=${add_to_all}`, data);

  return response;
};

const getComCalendarActivities = (id, year) => {
  const response = api.get(`${apiPrefix}/get-calendar-activities/${id}?year=${year}`);
  return response;
};

const getComListOfMembers = (id, page=1) => {
  const response = api.get(`${apiPrefix}/instance-committee-users?id=${id}`);
  return response;
};

const search = (value, page) => {
  const response = api.get(`${apiPrefix}/search?search=${value}&page=${page}`);
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

const postDelete = (id) => {
  const response = api.delete(`${apiPrefix}/post/${id}`);
  return response;
};

const postEdit = (formData, id) => {
  const response = api.patch(`${apiPrefix}/post/${id}`, formData);
  return response;
};



const UserService = {
  postEdit,
  postDelete,
  getCommittees,
  getComTopics,
  getTopicComments,
  postTopic,
  editTopic,
  getTopic,
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
