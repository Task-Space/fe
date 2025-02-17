interface ITask {
  id: string;
  title: string;
  progress: number;
  status: TASK_STATUS;
  tag: TASK_TAG;
}

enum TASK_STATUS {
  TODO = 0,
  IN_PROGRESS = 1,
  COMPLETED = 2
}

enum TASK_TAG {
  IMPORTANT = "Important",
  MEH = "Meh",
  OK = "Ok",
  NOT_THAT_IMPORTANT = "Not that important",
  HIGH_PRIORITY = "High Priority"
}

export type { ITask };
export { TASK_STATUS, TASK_TAG };
