import { FieldDefinitions, Post } from "../../types";

import { BaseFieldDefinitions } from "./BaseFieldDefinitions";
import { bookmarkedPostsStore } from "../store";

class PostFieldDefinitions extends BaseFieldDefinitions<Post> {
    typeName = 'Post';

    fieldDefinitions(): FieldDefinitions<Post> {
        return {
            isBookmarked: (_, { readField }) => {
                const id = readField<string>('id');
                const bokmarks = bookmarkedPostsStore.get();
                return bokmarks.has(id || '');
            }
        };
    }
}

export const postFieldDefinitions = new PostFieldDefinitions();
