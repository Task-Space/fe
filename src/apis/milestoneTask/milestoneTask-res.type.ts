import { IMilestoneTask } from "../../types/milestone-task";
import { SuccessResponse } from "../../utils/http";

interface GetMilestoneTaskByIdResType extends SuccessResponse<IMilestoneTask> {}

export type { GetMilestoneTaskByIdResType };
