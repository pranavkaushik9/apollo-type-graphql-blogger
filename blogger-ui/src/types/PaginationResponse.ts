export interface PaginatedResponse<T> {
    edges: Array<{
        node: T;
        cursor: string;
    }>,
    pageInfo: {
        endCursor: string;
        hasNextPage: boolean;
        total: number;
    }
}
