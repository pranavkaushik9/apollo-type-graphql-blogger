import { BlogCategory } from "./BlogCategory";
import { Post } from "./Post";
import { User } from "./User";

// TODO: reuse type defined in blogger-graphql
export interface Blog {
    id: string;
    name: string;
    category: BlogCategory;
    author?: User;
    posts?: Array<Post>;
    authorId: string;
}
