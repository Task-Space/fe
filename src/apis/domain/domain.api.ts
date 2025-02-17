import { IDomain } from "../../types/domain";
import http, { SuccessResponse } from "../../utils/http";

const URL = "Domain";

const domainApi = {
  getAllDomains() {
    return http.get<SuccessResponse<IDomain[]>>(`${URL}`);
  }
};

export default domainApi;
