import { MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";

@InputType()
export class UserInput {
    @Field(() => String, { nullable: true })
    @MaxLength(25)
    firstName?: string;

    @Field(() => String, { nullable: true })
    @MaxLength(25)
    lastName?: string;
}
