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

export type { UpdateMilestoneTaskReqType, AssignMemberToMilestoneTaskReqType };
