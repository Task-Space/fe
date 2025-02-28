import http from "../../utils/http";
import { GetMilestoneTaskJobsReqType } from "./milestoneTaskJob-req.type";
import { GetMilestoneTaskJobResType } from "./milestoneTaskJob-res.type";

const URL = "MilestoneTaskJob";

const milestoneTaskJobApi = {
  getMilestoneTaskJob({ MilestoneTaskId }: GetMilestoneTaskJobsReqType) {
    return http.get<GetMilestoneTaskJobResType>(URL, {
      params: { MilestoneTaskId }
    });
  }
};

export default milestoneTaskJobApi;
