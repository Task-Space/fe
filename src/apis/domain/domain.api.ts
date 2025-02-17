import http from "../../utils/http";

const URL = "Domain";

const domainApi = {
  getAllDomains() {
    return http.get<any>(`${URL}`);
  }
};

export default domainApi;
