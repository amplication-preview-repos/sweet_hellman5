import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CommentsService } from "./comments.service";
import { CommentsControllerBase } from "./base/comments.controller.base";

@swagger.ApiTags("comments")
@common.Controller("comments")
export class CommentsController extends CommentsControllerBase {
  constructor(protected readonly service: CommentsService) {
    super(service);
  }
}
