import { InMemoryCacheConfig } from "@apollo/client";

import { bookmarkedPostsStore, siteUserSore } from "./store";

export const cacheConfig: InMemoryCacheConfig = {
    typePolicies: {
        User: {
            fields: {
                fullName: (_, { readField }) => {
                    return `${readField<string>('firstName')} ${readField<string>('lastName')}`
                }
            }
        },
        Post: {
            fields: {
                isBookmarked: (_, { readField }) => {
                    const id = readField<string>('id');
                    const bokmarks = bookmarkedPostsStore.get();
                    return bokmarks.has(id || '');
                }
            }
        },
        Query: {
            fields: {
                ...bookmarkedPostsStore.getFieldReadDefinition(),
                ...siteUserSore.getFieldReadDefinition()
            }
        }
      }
};
