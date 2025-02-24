import { IMilestone } from "../../types/milestone";
import { SuccessResponse } from "../../utils/http";

interface GetMilestonesResType extends SuccessResponse<IMilestone[]> {}

export type { GetMilestonesResType };
