import { Blog } from "./Blog";
import { Post } from "./Post";

// TODO: reuse type defined in blogger-graphql
export interface User {
    id: string;
    firstName: string;
    lastName: string;
    blogs?: Array<Blog>;
    posts?: Array<Post>;
    fullName: string;
}
