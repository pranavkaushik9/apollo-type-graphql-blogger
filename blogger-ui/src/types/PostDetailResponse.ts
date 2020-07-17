import { QueryResponse } from "./QueryResponse";
import { Post } from "./Post";

export interface PostDetailResponse extends QueryResponse<Post> {
    post: Post; 
}
