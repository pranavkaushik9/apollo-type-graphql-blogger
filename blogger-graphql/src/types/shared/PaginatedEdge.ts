import { ClassType, ObjectType, Field, ID } from "type-graphql";

export interface IPaginationEdge<T> {
    cursor: string;
    node: T;
}

export const PaginationEdge= <T>(TEntityClass: ClassType<T>) => {
    @ObjectType({ isAbstract: true })
    abstract class PaginationEdgeClass implements IPaginationEdge<T> {
        @Field(type => ID)
        cursor: string;
    
        @Field(type => TEntityClass)
        node: T;
    }
    return PaginationEdgeClass;
}
