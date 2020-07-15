import { Min } from "class-validator";
import { ArgsType, Field, ID, Int } from "type-graphql";

@ArgsType()
export class PaginationArgs {
    @Field(type => ID, { nullable: true})
    cursor?: string;

    @Field(type => Int, { nullable: true})
    @Min(1)
    first: number;
}
