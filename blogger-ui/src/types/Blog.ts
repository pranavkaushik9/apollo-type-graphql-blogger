import { User } from "./User";
import { Post } from "./Post";
import { BlogCategory } from "./BlogCategory";

// TODO: reuse type defined in blogger-graphql
export interface Blog {
    id: string;
    name: string;
    category: BlogCategory;
    author?: User;
    posts?: Array<Post>;
    authorId: string;
}
