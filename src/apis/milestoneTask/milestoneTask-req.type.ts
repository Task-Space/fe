interface UpdateMilestoneTaskReqType {
  taskName?: string;
  taskDescription?: string;
  taskDeadline?: string;
  milestoneTaskId: string;
  milestoneId?: string;
  indexNumber?: number;
}

export type { UpdateMilestoneTaskReqType };
