import api from "./api";
const baseURL = process.env.BASE_URL;
const apiPrefix = "/gppb-microsite-backend";


const getCommittees =  () => {
    const response =  api.get(`${apiPrefix}/committee`);
    return response;
  };

const UserService = {
    getCommittees,
};

export default UserService;
