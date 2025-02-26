import { IMentor } from "../../types/identity";
import { IProject } from "../../types/project";
import { IUser } from "../../types/user";
import { SuccessResponse } from "../../utils/http";

interface LoginResponseType extends SuccessResponse<string> {}

interface GetApplyingMentorResponseType extends SuccessResponse<IMentor[]> {}

interface GetUserByIdResponseType
  extends SuccessResponse<{
    userInfos: IUser;
    projects: IProject[];
  }> {}

export type {
  LoginResponseType,
  GetApplyingMentorResponseType,
  GetUserByIdResponseType
};
