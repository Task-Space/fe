interface IMilestone {
  milestoneId: string;
  milestoneName: string;
  milestoneDescription: string;
  createdBy: string;
  milestoneTasks: any[];
}

export type { IMilestone };
