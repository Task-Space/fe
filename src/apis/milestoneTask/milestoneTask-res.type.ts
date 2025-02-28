import { IMilestoneTask } from "../../types/milestoneTask";
import { SuccessResponse } from "../../utils/http";

interface GetMilestoneTaskByIdResType extends SuccessResponse<IMilestoneTask> {}

export type { GetMilestoneTaskByIdResType };
