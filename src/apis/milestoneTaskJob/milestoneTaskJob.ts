import http from "../../utils/http";
import {
  CreateMilestoneTaskJobReqType,
  EditMilestoneTaskJobReqType,
  GetMilestoneTaskJobsReqType
} from "./milestoneTaskJob-req.type";
import { GetMilestoneTaskJobResType } from "./milestoneTaskJob-res.type";

const URL = "MilestoneTaskJob";

const milestoneTaskJobApi = {
  getMilestoneTaskJob({ MilestoneTaskId }: GetMilestoneTaskJobsReqType) {
    return http.get<GetMilestoneTaskJobResType>(URL, {
      params: { MilestoneTaskId }
    });
  },

  craeteMilestoneTaskJob(data: CreateMilestoneTaskJobReqType) {
    return http.post(`${URL}`, data);
  },

  editMilestoneTaskJob(data: EditMilestoneTaskJobReqType) {
    return http.put(`${URL}/${data.milestoneTaskId}`, data);
  }
};

export default milestoneTaskJobApi;
