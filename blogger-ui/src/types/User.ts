import { Post } from "./Post";
import { Blog } from "./Blog";

// TODO: reuse type defined in blogger-graphql
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    blogs?: Array<Blog>;
    posts?: Array<Post>;
}
