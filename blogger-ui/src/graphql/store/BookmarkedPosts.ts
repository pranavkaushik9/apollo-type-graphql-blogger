import { LocalEntity } from "./LocalEntity";

export const BookmarkedPosts = new LocalEntity<Map<string, null>>('bookmarkedPosts', new Map());
