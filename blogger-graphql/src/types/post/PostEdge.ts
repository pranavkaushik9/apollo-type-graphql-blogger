import { ObjectType } from "type-graphql";

import { PaginationEdge } from "../shared";
import { Post } from "./Post";

@ObjectType({ isAbstract: true })
export class PostEdge extends PaginationEdge(Post) {
}
