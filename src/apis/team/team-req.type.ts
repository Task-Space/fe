interface TeamInviteReqType {
  teamId: string;
  email: string;
}

interface CreateTeamReqType {
  TeamName?: string;
  TeamDescription?: string;
  TeamLogo?: File;
  TeamBackgroundImage?: File;
  TeamSize?: number;
  TeamContact?: string;
  TeamEmail?: string;
}

interface EditTeamReqType extends CreateTeamReqType {
  TeamId: string;
  UserId?: string;
}

interface ApplyTeamReqType {
  TeamId: string;
  ApplyCv: File;
}

export type {
  TeamInviteReqType,
  CreateTeamReqType,
  EditTeamReqType,
  ApplyTeamReqType
};
