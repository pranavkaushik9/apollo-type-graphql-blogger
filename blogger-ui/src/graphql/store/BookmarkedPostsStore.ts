import { BaseStore } from "./BaseStore";

class BookmarkedPostsStore extends BaseStore<Map<string, null>> {
    constructor() {
        super('bookmarkedPosts', new Map());
    }

    public addNewBookmark(postId: string) {
        const newState = new Map(this.get());
        
        if (!newState.has(postId)) {
            newState.set(postId, null);
            this.set(newState);
        }
    }

    public removeBookmark(postId: string) {
        const newState = new Map(this.get());
        
        if (newState.has(postId)) {
            newState.delete(postId);
            this.set(newState);
        }
    }
}

export const bookmarkedPostsStore = new BookmarkedPostsStore();
