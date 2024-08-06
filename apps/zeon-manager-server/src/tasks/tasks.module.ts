import { Module } from "@nestjs/common";
import { TasksModuleBase } from "./base/tasks.module.base";
import { TasksService } from "./tasks.service";
import { TasksController } from "./tasks.controller";
import { TasksResolver } from "./tasks.resolver";

@Module({
  imports: [TasksModuleBase],
  controllers: [TasksController],
  providers: [TasksService, TasksResolver],
  exports: [TasksService],
})
export class TasksModule {}
