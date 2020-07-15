import { ObjectType, Field, ID, Int } from "type-graphql";

@ObjectType({ isAbstract: true })
export class PageInfo {
    @Field(type => ID)
    endCursor: string;

    @Field()
    hasNextPage: boolean;

    @Field(type => Int)
    total: number;
}
