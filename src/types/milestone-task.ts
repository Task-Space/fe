import { IMilestoneTaskJob } from "./milestoneTaskJob";

interface IMilestoneTask {
  id: string;
  name: string;
  description: string;
  progress: number;
  mileStone: {
    milestoneId: string;
    milestoneName: string;
  };
  taskJobs: IMilestoneTaskJob[];
  userJoinTasks: any[];
  resource: any[];
  notifications: [
    {
      milestoneTaskId: string;
      message: string;
      medias: any[];
    }
  ];
}

export type { IMilestoneTask };
