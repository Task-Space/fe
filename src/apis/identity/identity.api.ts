import { objectToFormData } from "../../utils/converter";
import http from "../../utils/http";
import {
  ApplyRequestType,
  LoginRequestType,
  RegisterRequestType,
  UpdateMeReqType
} from "./identity-req.type";
import {
  GetApplyingMentorResponseType,
  GetMeResType,
  GetUserByIdResponseType
} from "./identity-res.type";

const URL = "Identity";

const identityApi = {
  register(data: RegisterRequestType) {
    return http.post(`${URL}/register`, data);
  },

  apply(data: ApplyRequestType) {
    // console.log(objectToFormData(data));
    return http.post(`${URL}/apply`, objectToFormData(data), {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },

  login(data: LoginRequestType) {
    return http.post(`${URL}/login`, data);
  },

  getUserById(userId: string) {
    return http.get<GetUserByIdResponseType>(`${URL}/user/${userId}`);
  },
  getApplyingMentor() {
    return http.get<GetApplyingMentorResponseType>(`${URL}/apply`);
  },

  putApply(data: { userId: string; isApproved: boolean; isBanned: boolean }) {
    return http.put(`${URL}/apply`, data);
  },

  getMe() {
    return http.get<GetMeResType>(`${URL}/me`);
  },

  udateMe(data: UpdateMeReqType) {
    return http.put(`${URL}`, data);
  }
};

export default identityApi;
