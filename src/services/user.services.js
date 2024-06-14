import api from "./api";
const baseURL = process.env.BASE_URL;
const apiPrefix = "/gppb-microsite-backend";


const getCommittees = () => {
    const response =  api.get(`${apiPrefix}/committee`);
    return response;
  };

const getComTopics = (id) => {
  const response =  api.get(`${apiPrefix}/committee/${id}`);
  return response;
};

const postTopic = (params) => {
  const response =  api.post(`${apiPrefix}/topic`, params);
  return response;
};


const UserService = {
    getCommittees,
    getComTopics,
    postTopic
};

export default UserService;
