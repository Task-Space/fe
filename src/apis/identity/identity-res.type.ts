import { IMentor } from "../../types/identity";
import { SuccessResponse } from "../../utils/http";

interface LoginResponseType extends SuccessResponse<string> {}

interface GetApplyingMentorResponseType extends SuccessResponse<IMentor[]> {}

export type { LoginResponseType, GetApplyingMentorResponseType };
