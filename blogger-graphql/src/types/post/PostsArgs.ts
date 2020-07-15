import { ArgsType, Field, ID } from "type-graphql";
import { PaginationArgs } from "../shared";

@ArgsType()
export class PostsArgs extends PaginationArgs {
    @Field(() => ID, { nullable: true })
    authorId?: string

    @Field(() => ID, { nullable: true })
    blogId?: string;

    @Field(() => String, { nullable: true })
    searchKey?: string;
}