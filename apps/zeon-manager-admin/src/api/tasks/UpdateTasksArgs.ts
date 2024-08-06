import { TasksWhereUniqueInput } from "./TasksWhereUniqueInput";
import { TasksUpdateInput } from "./TasksUpdateInput";

export type UpdateTasksArgs = {
  where: TasksWhereUniqueInput;
  data: TasksUpdateInput;
};
