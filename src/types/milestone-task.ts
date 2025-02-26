interface IMilestoneTask {
  id: string;
  title: string;
  description: string;
  index: number;
  deadline: string;
  userTask: any[];
}

export type { IMilestoneTask };
