import { Blog } from "./Blog";
import { User } from "./User";

// TODO: reuse type defined in blogger-graphql
export interface Post {
    id: string;
    title: string;
    body: string;
    author?: User;
    blog?: Blog;
    blogId: string;
    authorId: string;
    isBookmarked: boolean;
}
