import { ObjectType, Field } from "type-graphql";
import { User } from "../user";
import { Blog } from "../blog";
import { BaseEntity } from "../shared/BaseEntity";

@ObjectType()
export class Post implements BaseEntity {
    @Field()
    id: string;

    @Field()
    title: string;

    @Field()
    body: string;
    
    @Field(() => User)
    author?: User;

    @Field(() => Blog)
    blog?: Blog;

    blogId: string;

    authorId: string;
}
