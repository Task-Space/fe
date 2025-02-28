import http from "../../utils/http";
import {
  AssignMemberToMilestoneTaskReqType,
  UnassignMemberToMilestoneTaskReqType,
  UpdateMilestoneTaskReqType
} from "./milestoneTask-req.type";
import { GetMilestoneTaskByIdResType } from "./milestoneTask-res.type";

const URL = "MilestoneTask";

const milestoneTaskApi = {
  updateMilestoneTask(data: UpdateMilestoneTaskReqType) {
    return http.put(`${URL}/${data.milestoneTaskId}`, data);
  },

  getMilestoneTaskDetailById(milestoneTaskId: string) {
    return http.get<GetMilestoneTaskByIdResType>(`${URL}/${milestoneTaskId}`);
  },

  assignMemberToMilestoneTask(data: AssignMemberToMilestoneTaskReqType) {
    return http.post(`${URL}/assign/${data.milestoneTaskId}`, data);
  },

  unassignMemberFromMilestoneTask(data: UnassignMemberToMilestoneTaskReqType) {
    return http.delete(`${URL}/assign/${data.milestoneTaskId}`, {
      params: data
    });
  }
};

export default milestoneTaskApi;
