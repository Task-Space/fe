interface CreateProjectReqType {
  ProjectName: string;
  Description: string;
  ProjectImgUrl: File;
  TeamId?: string;
  TeamName: string;
  TeamDescription: string;
  TeamLogo: File;
  TeamBackgroundImage: File;
  TeamSize: number;
  TeamContact: string;
  TeamEmail: string;
  StartDate: string;
  EndDates: string;
  DomainId: string[];
  IsPublish: boolean;
}

export type { CreateProjectReqType };
