import { objectToFormData } from "../../utils/converter";
import http from "../../utils/http";
import { CreateProjectReqType } from "./project-req.type";
import { GetProjectByIdResType, GetProjectResType } from "./project-res.type";

const URL = "Project";

const projectApi = {
  createProject(data: CreateProjectReqType) {
    return http.post(`${URL}/apply`, objectToFormData(data), {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },

  getProject() {
    return http.get<GetProjectResType>(`${URL}`);
  },
  getProjectById(projectId: string) {
    return http.get<GetProjectByIdResType>(`${URL}/${projectId}`);
  }
};

export default projectApi;
