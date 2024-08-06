import { Comments as TComments } from "../api/comments/Comments";

export const COMMENTS_TITLE_FIELD = "author";

export const CommentsTitle = (record: TComments): string => {
  return record.author?.toString() || String(record.id);
};
