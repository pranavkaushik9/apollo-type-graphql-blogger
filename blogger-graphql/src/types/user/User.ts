import { ObjectType, Field, ID } from 'type-graphql';

import { Blog } from '../blog';
import { Post } from '../post';
import { BaseEntity } from '../shared/BaseEntity';

@ObjectType()
export class User implements BaseEntity {
    @Field(type => ID)
    id: string;
    
    @Field()
    firstName: string;

    @Field()
    lastName: string;

    @Field(type => [Blog], { nullable: true })
    blogs?: Array<Blog>;

    @Field(type => [Post], { nullable: true })
    posts?: Array<Post>;
}
