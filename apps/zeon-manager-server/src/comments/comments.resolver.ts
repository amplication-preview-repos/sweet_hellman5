import * as graphql from "@nestjs/graphql";
import { CommentsResolverBase } from "./base/comments.resolver.base";
import { Comments } from "./base/Comments";
import { CommentsService } from "./comments.service";

@graphql.Resolver(() => Comments)
export class CommentsResolver extends CommentsResolverBase {
  constructor(protected readonly service: CommentsService) {
    super(service);
  }
}
