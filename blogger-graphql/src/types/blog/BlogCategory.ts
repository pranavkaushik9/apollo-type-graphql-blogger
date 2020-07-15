import { registerEnumType } from "type-graphql";

export enum BlogCategory {
    TECH = 'TECH',
    FOOD = 'FOOD',
    TRAVEL = 'TRAVEL'
}

registerEnumType(BlogCategory, {
    name: 'BlogCategory',
    description: 'A category of Blog'
});
