import http from "../../utils/http";
import { CreateMilestoneReqType } from "./milestone-req.type";
import { GetMilestonesResType } from "./milestone-res.type";

const URL = "Milestone";

const milestoneApi = {
  getMilestones(projectId: string) {
    return http.get<GetMilestonesResType>(`${URL}/${projectId}`);
  },

  createMilestone(data: CreateMilestoneReqType) {
    return http.post(`${URL}`, data);
  }
};

export default milestoneApi;
