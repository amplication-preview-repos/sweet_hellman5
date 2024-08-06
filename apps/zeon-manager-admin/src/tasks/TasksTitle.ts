import { Tasks as TTasks } from "../api/tasks/Tasks";

export const TASKS_TITLE_FIELD = "title";

export const TasksTitle = (record: TTasks): string => {
  return record.title?.toString() || String(record.id);
};
