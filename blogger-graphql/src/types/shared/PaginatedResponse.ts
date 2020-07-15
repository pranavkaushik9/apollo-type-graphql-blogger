import { Field, ObjectType, ID, ClassType } from "type-graphql";
import { PageInfo } from "./PageInfo";
import { IPaginationEdge } from "./PaginatedEdge";

export interface IPaginatedResponse<T> {
    edges: Array<IPaginationEdge<T>>;
    pageInfo: PageInfo
}

export const PaginatedResponse = <T>(TEdgeClass: ClassType<T>) => {
    @ObjectType({ isAbstract: true })
    abstract class PaginatedResponseClass implements IPaginatedResponse<T> {

        @Field(type => [TEdgeClass])
        edges: Array<IPaginationEdge<T>>;

        @Field(type => PageInfo)
        pageInfo: PageInfo;
    }

    return PaginatedResponseClass;
};
