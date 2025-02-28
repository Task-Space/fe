import { objectToFormData } from "../../utils/converter";
import http from "../../utils/http";
import {
  CreateProjectReqType,
  EditProjectApplyReqType,
  GetProjectReqType,
  ResponseProjectApplyReqType
} from "./project-req.type";
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

  getProject(data: GetProjectReqType) {
    return http.get<GetProjectResType>(`${URL}`, {
      params: data
    });
  },

  getProjectById(projectId: string) {
    return http.get<GetProjectByIdResType>(`${URL}/${projectId}`);
  },

  responseProjectApply(data: ResponseProjectApplyReqType) {
    return http.put(`${URL}/apply/${data.projectApplyId}/response`, data);
  },

  editProjectApply(data: EditProjectApplyReqType) {
    return http.put(`${URL}/apply/${data.ProjectApplyId}`, data);
  },

  getMyProject() {
    return http.get<GetProjectResType>(`${URL}/me`);
  }
};

export default projectApi;
