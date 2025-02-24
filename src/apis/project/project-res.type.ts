import { IProject } from "../../types/project";
import { SuccessResponse } from "../../utils/http";

interface GetProjectResType extends SuccessResponse<IProject[]> {}

interface GetProjectByIdResType extends SuccessResponse<IProject> {}

export type { GetProjectResType, GetProjectByIdResType };
