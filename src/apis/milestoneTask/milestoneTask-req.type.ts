interface UpdateMilestoneTaskReqType {
  taskName?: string;
  taskDescription?: string;
  taskDeadline?: string;
  milestoneTaskId: string;
  milestoneId?: string;
  indexNumber?: number;
}

interface AssignMemberToMilestoneTaskReqType {
  milestoneTaskId: string;
  userIds?: string[];
}

interface UnassignMemberToMilestoneTaskReqType {
  milestoneTaskId: string;
  userId?: string;
}

export type {
  UpdateMilestoneTaskReqType,
  AssignMemberToMilestoneTaskReqType,
  UnassignMemberToMilestoneTaskReqType
};
