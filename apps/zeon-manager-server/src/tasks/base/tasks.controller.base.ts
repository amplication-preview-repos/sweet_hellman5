/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { TasksService } from "../tasks.service";
import { TasksCreateInput } from "./TasksCreateInput";
import { Tasks } from "./Tasks";
import { TasksFindManyArgs } from "./TasksFindManyArgs";
import { TasksWhereUniqueInput } from "./TasksWhereUniqueInput";
import { TasksUpdateInput } from "./TasksUpdateInput";

export class TasksControllerBase {
  constructor(protected readonly service: TasksService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Tasks })
  async createTasks(@common.Body() data: TasksCreateInput): Promise<Tasks> {
    return await this.service.createTasks({
      data: data,
      select: {
        assignedTo: true,
        createdAt: true,
        description: true,
        id: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Tasks] })
  @ApiNestedQuery(TasksFindManyArgs)
  async tasksItems(@common.Req() request: Request): Promise<Tasks[]> {
    const args = plainToClass(TasksFindManyArgs, request.query);
    return this.service.tasksItems({
      ...args,
      select: {
        assignedTo: true,
        createdAt: true,
        description: true,
        id: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Tasks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async tasks(
    @common.Param() params: TasksWhereUniqueInput
  ): Promise<Tasks | null> {
    const result = await this.service.tasks({
      where: params,
      select: {
        assignedTo: true,
        createdAt: true,
        description: true,
        id: true,
        status: true,
        title: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Tasks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateTasks(
    @common.Param() params: TasksWhereUniqueInput,
    @common.Body() data: TasksUpdateInput
  ): Promise<Tasks | null> {
    try {
      return await this.service.updateTasks({
        where: params,
        data: data,
        select: {
          assignedTo: true,
          createdAt: true,
          description: true,
          id: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Tasks })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteTasks(
    @common.Param() params: TasksWhereUniqueInput
  ): Promise<Tasks | null> {
    try {
      return await this.service.deleteTasks({
        where: params,
        select: {
          assignedTo: true,
          createdAt: true,
          description: true,
          id: true,
          status: true,
          title: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
