import { IMilestoneTaskJob } from "./milestoneTaskJob";

interface IMilestoneTask {
  id: string;
  title: string;
  description: string;
  progress: number;
  mileStone: {
    id: string;
    name: string;
  };
  taskJobs: IMilestoneTaskJob[];
  userJoinTasks: { userId: string; userName: string }[];
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
