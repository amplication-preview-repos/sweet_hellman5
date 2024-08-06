import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TasksServiceBase } from "./base/tasks.service.base";

@Injectable()
export class TasksService extends TasksServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
