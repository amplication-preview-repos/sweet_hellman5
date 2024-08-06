import * as graphql from "@nestjs/graphql";
import { TasksResolverBase } from "./base/tasks.resolver.base";
import { Tasks } from "./base/Tasks";
import { TasksService } from "./tasks.service";

@graphql.Resolver(() => Tasks)
export class TasksResolver extends TasksResolverBase {
  constructor(protected readonly service: TasksService) {
    super(service);
  }
}
