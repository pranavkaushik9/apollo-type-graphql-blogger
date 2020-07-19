import React, { ReactElement } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

import { bookmarkedPostsStore } from '../../graphql';

const cache = new InMemoryCache({
    typePolicies: {
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
                ...bookmarkedPostsStore.getFieldReadDefinition()
            }
        }
      }
});

const apolloClient = new ApolloClient({
    cache,
    link: new HttpLink({
        uri: process.env.REACT_APP_GRAPHQL_SERVER_PATH
    })
});

interface GraphQLProviderProps {
    children: ReactElement
}

export const GraphQLProvider = ({ children }: GraphQLProviderProps) => (
    <ApolloProvider client={apolloClient}>
        { children }
    </ApolloProvider>
);
