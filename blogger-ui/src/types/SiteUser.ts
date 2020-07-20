import { User } from "./User";

export interface SiteUser {
    isGuest: boolean;
    info?: User
}
