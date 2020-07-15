import { Max, Min } from "class-validator";
import { ArgsType, Field, Int, ID } from "type-graphql";
import { PaginationArgs } from "../shared";

@ArgsType()
export class UsersArgs extends PaginationArgs {
}
