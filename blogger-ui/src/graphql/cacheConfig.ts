import { InMemoryCacheConfig } from "@apollo/client";

import { postFieldDefinitions, userFieldDefinitons } from "./fieldDefinitions";
import { bookmarkedPostsStore, siteUserSore } from "./store";

export const cacheConfig: InMemoryCacheConfig = {
    typePolicies: {
        ...userFieldDefinitons.get(),
        ...postFieldDefinitions.get(),
        Query: {
            fields: {
                ...bookmarkedPostsStore.getQueryFieldReadDefinition(),
                ...siteUserSore.getQueryFieldReadDefinition()
            }
        }
      }
};
