import http from "../../utils/http";
import { UpdateMilestoneTaskReqType } from "./milestoneTask-req.type";
import { GetMilestoneTaskByIdResType } from "./milestoneTask-res.type";

const URL = "MilestoneTask";

const milestoneTaskApi = {
  updateMilestoneTask(data: UpdateMilestoneTaskReqType) {
    return http.put(`${URL}/${data.milestoneTaskId}`, data);
  },

  getMilestoneTaskDetailById(milestoneTaskId: string) {
    return http.get<GetMilestoneTaskByIdResType>(`${URL}/${milestoneTaskId}`);
  },

  assignMemberToMilestoneTask(data: UpdateMilestoneTaskReqType) {
    return http.post(`${URL}/assign`, data);
  }
};

export default milestoneTaskApi;
