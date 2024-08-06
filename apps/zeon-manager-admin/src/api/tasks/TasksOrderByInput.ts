import { SortOrder } from "../../util/SortOrder";

export type TasksOrderByInput = {
  assignedTo?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
