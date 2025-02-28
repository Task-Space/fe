interface CreateProjectReqType {
  ProjectName: string;
  Description: string;
  ProjectImgUrl: File;
  TeamId?: string;
  TeamName?: string;
  TeamDescription?: string;
  TeamLogo?: File;
  TeamBackgroundImage?: File;
  TeamSize?: number;
  TeamContact?: string;
  TeamEmail?: string;
  StartDate: string;
  EndDates: string;
  DomainId: string[];
  IsPublish: boolean;
}

interface GetProjectReqType {
  teamId?: string;
  isApply?: boolean;
}

interface EditProjectApplyReqType
  extends Partial<
    Omit<
      CreateProjectReqType,
      | "TeamId"
      | "TeamName"
      | "TeamDescription"
      | "TeamLogo"
      | "TeamBackgroundImage"
      | "TeamSize"
      | "TeamContact"
      | "TeamEmail"
    >
  > {
  ProjectApplyId: string;
}

interface ResponseProjectApplyReqType {
  projectApplyId: string;
  isApproved: boolean;
  reason: string;
}

export type {
  CreateProjectReqType,
  EditProjectApplyReqType,
  ResponseProjectApplyReqType,
  GetProjectReqType
};
