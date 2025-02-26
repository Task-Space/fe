import { ITeam } from "../../types/team.type";
import { SuccessResponse } from "../../utils/http";

interface GetTeamsResType extends SuccessResponse<ITeam[]> {}

export type { GetTeamsResType };
