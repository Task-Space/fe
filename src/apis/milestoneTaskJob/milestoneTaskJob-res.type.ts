import { IMilestoneTaskJob } from "../../types/milestoneTaskJob";
import { SuccessResponse } from "../../utils/http";

interface GetMilestoneTaskJobResType
  extends SuccessResponse<IMilestoneTaskJob[]> {}

export type { GetMilestoneTaskJobResType };
