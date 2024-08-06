import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TasksService } from "./tasks.service";
import { TasksControllerBase } from "./base/tasks.controller.base";

@swagger.ApiTags("tasks")
@common.Controller("tasks")
export class TasksController extends TasksControllerBase {
  constructor(protected readonly service: TasksService) {
    super(service);
  }
}
