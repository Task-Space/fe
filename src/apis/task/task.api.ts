import http from "../../utils/http";
import { CreateTaskReqType } from "./task-req.type";

const URL = "MilestoneTask";

const taskApi = {
  createTask(data: CreateTaskReqType) {
    return http.post(`${URL}/${data.milestoneId}`, data);
  }
};

export default taskApi;
