import http from "../../utils/http";

const URL = "University";

const universityApi = {
  getAllUniversities() {
    return http.get<any>(`${URL}`);
  }
};

export default universityApi;
