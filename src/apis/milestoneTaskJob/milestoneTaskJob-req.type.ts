interface GetMilestoneTaskJobsReqType {
  MilestoneTaskId?: string;
}

interface CreateMilestoneTaskJobReqType {
  jobTitle: string;
  milestoneTaskId: string;
}

interface EditMilestoneTaskJobReqType {
  jobTitle?: string;
  milestoneTaskJobId: string;
  isClick: boolean;
}

export type {
  GetMilestoneTaskJobsReqType,
  CreateMilestoneTaskJobReqType,
  EditMilestoneTaskJobReqType
};
