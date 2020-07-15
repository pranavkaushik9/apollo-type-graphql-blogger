import { ObjectType } from "type-graphql";

import { PaginatedResponse } from "../shared";
import { PostEdge } from './PostEdge';

@ObjectType()
export class PostConnection extends PaginatedResponse(PostEdge) {
}
