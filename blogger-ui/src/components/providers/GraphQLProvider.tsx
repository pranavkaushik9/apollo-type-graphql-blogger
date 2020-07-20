import React, { ReactElement } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

import { cacheConfig } from '../../graphql';

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(cacheConfig),
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
