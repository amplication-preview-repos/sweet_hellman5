import { Module } from "@nestjs/common";
import { CommentsModuleBase } from "./base/comments.module.base";
import { CommentsService } from "./comments.service";
import { CommentsController } from "./comments.controller";
import { CommentsResolver } from "./comments.resolver";

@Module({
  imports: [CommentsModuleBase],
  controllers: [CommentsController],
  providers: [CommentsService, CommentsResolver],
  exports: [CommentsService],
})
export class CommentsModule {}
