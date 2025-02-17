import { objectToFormData } from "../../utils/converter";
import http from "../../utils/http";
import {
  ApplyRequestType,
  LoginRequestType,
  RegisterRequestType
} from "./identity-req.type";

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
  }
};

export default identityApi;
