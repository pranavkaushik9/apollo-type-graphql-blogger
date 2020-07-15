import { ObjectType } from "type-graphql";

import { PaginatedResponse } from "../shared";
import { UserEdge } from "./UserEdge";

@ObjectType()
export class UserConnection extends PaginatedResponse(UserEdge)  {
}
