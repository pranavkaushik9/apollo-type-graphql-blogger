import { ObjectType } from "type-graphql";

import { PaginationEdge } from "../shared";
import { User } from "./User";

@ObjectType({ isAbstract: true })
export class UserEdge extends PaginationEdge(User) {
}