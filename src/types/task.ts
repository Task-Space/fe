interface ITask {
  id: string;
  title: string;
  progress: number;
  tag: TASK_TAG;
}

enum TASK_TAG {
  IMPORTANT = "Important",
  MEH = "Meh",
  OK = "Ok",
  NOT_THAT_IMPORTANT = "Not that important",
  HIGH_PRIORITY = "High Priority"
}

export type { ITask };
export { TASK_TAG };
