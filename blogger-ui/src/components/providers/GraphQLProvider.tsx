import React, { ReactElement } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';

import { graphQLServerPath } from '../../constants';

const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: graphQLServerPath
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
