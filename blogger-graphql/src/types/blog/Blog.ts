import { Field, ID, ObjectType } from "type-graphql";

import { User } from "../user";
import { BlogCategory } from "./BlogCategory";
import { Post } from "../post";

@ObjectType()
export class Blog {
    @Field(() => ID)
    id: string;

    @Field()
    name: string;

    @Field(type => BlogCategory)
    category: BlogCategory;

    @Field(() => User)
    author?: User;
    
    @Field(() => [Post])
    posts?: Array<Post>;

    authorId: string;
}
