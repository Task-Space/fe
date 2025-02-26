import { IMilestoneTask } from "./milestone-task";

interface IMilestone {
  id: string;
  name: string;
  description: string;
  createdBy: string;
  milestoneTasks: IMilestoneTask[];
}

export type { IMilestone };
