import { IUniversity } from "../../types/university";
import http, { SuccessResponse } from "../../utils/http";

const URL = "University";

const universityApi = {
  getAllUniversities() {
    return http.get<SuccessResponse<IUniversity[]>>(`${URL}`);
  }
};

export default universityApi;
