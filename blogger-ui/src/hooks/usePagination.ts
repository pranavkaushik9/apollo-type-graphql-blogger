import { useQuery, DocumentNode } from "@apollo/client";

import { PaginationArgs, PaginatedResponse, QueryResponse } from "../types";

export const usePagination = <T, TArgs extends PaginationArgs>(args: TArgs, key: string, query: DocumentNode) => {
    const {
        loading,
        error,
        fetchMore,
        data,
        refetch
    } = useQuery<QueryResponse<PaginatedResponse<T>>, TArgs>(query, { variables: args });

    const fetchMoreData = () => {
        fetchMore({
            variables: {
                ...args,
                cursor: data![key].pageInfo?.endCursor
            },
            updateQuery: (prev, { fetchMoreResult }) => {
              if (fetchMoreResult != null) {
                const newEdges = fetchMoreResult[key].edges;
                const pageInfo = fetchMoreResult[key].pageInfo;
                if (newEdges.length > 0) {
                  return {
                    [key]: {
                      edges: [...prev[key].edges, ...newEdges],
                      pageInfo
                    }
                  }
                }
              }
              return prev;
            }
          })
    };

    return {
        loading,
        error,
        fetchMoreData,
        refetch,
        hasMore: data != null ? data![key].pageInfo?.hasNextPage: false,
        items: data != null ? data![key].edges: []
    };
};
