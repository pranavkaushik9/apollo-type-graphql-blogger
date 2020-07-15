import { ArgsType, Field, ID } from "type-graphql";
import { BlogCategory } from "./BlogCategory";

@ArgsType()
export class BlogArgs {
    @Field(() => ID)
    authorId: string;

    @Field(() => String, { nullable: true })
    searchKey?: string;

    @Field(() => BlogCategory, { nullable: true })
    category?: BlogCategory;
}
