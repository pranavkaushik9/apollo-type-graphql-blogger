import { User } from "./User";
import { PaginatedResponse } from "./PaginationResponse";

export interface UserResponse {
    users: PaginatedResponse<User>;
}