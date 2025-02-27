import { objectToFormData } from "../../utils/converter";
import http from "../../utils/http";
import {
  AcceptTeamInviteReqType,
  ApplyTeamReqType,
  CreateTeamReqType,
  EditTeamReqType,
  TeamInviteReqType
} from "./team-req.type";
import { GetTeamsResType } from "./team-res.type";

const URL = "Team";

const teamApi = {
  getTeams() {
    return http.get<GetTeamsResType>(URL);
  },

  inviteToTeam({ email, teamId }: TeamInviteReqType) {
    return http.post(`${URL}/invite`, [{ email }], {
      params: {
        teamId
      }
    });
  },

  createTeam(data: CreateTeamReqType) {
    return http.post(URL, objectToFormData(data), {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },

  editTeam(data: EditTeamReqType) {
    return http.put(`${URL}/${data.TeamId}`, objectToFormData(data), {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },

  applyTeam(data: ApplyTeamReqType) {
    return http.post(`${URL}/Apply/${data.TeamId}`, objectToFormData(data), {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    });
  },

  acceptTeamInvite(data: AcceptTeamInviteReqType) {
    return http.put(
      `${URL}/Invite`,
      {},
      {
        params: data
      }
    );
  }
};

export default teamApi;
