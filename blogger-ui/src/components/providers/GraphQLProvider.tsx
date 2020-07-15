import React, { ReactElement } from 'react';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';


const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
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
