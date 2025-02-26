import http from "../../utils/http";
import { UpdateMilestoneTaskReqType } from "./milestoneTask-req.type";

const URL = "MilestoneTask";

const milestoneTaskApi = {
  updateMilestoneTask(data: UpdateMilestoneTaskReqType) {
    return http.put(`${URL}/${data.milestoneTaskId}`, data);
  }
};

export default milestoneTaskApi;
