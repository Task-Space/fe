interface GetMilestoneTaskJobsReqType {
  MilestoneTaskId?: string;
}

interface CreateMilestoneTaskJobReqType {
  jobTitle: string;
  milestoneTaskId: string;
}

interface EditMilestoneTaskJobReqType {
  jobTitle?: string;
  milestoneTaskId: string;
  isClick: boolean;
}

export type {
  GetMilestoneTaskJobsReqType,
  CreateMilestoneTaskJobReqType,
  EditMilestoneTaskJobReqType
};
