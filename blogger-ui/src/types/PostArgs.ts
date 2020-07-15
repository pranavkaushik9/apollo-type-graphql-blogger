import { PaginationArgs } from "./PaginationArgs";

export interface PostArgs extends PaginationArgs {
    blogId?: string;
    authorId?: string;
}
