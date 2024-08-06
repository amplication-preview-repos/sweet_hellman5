import { TasksWhereInput } from "./TasksWhereInput";
import { TasksOrderByInput } from "./TasksOrderByInput";

export type TasksFindManyArgs = {
  where?: TasksWhereInput;
  orderBy?: Array<TasksOrderByInput>;
  skip?: number;
  take?: number;
};
