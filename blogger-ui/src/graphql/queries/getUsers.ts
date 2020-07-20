import { gql } from "@apollo/client";

export const getUsers = gql`
    query($cursor: ID, $first: Int) {
        users(cursor: $cursor, first: $first) {
            edges{
                node {
                    id
                    firstName
                    lastName
                    fullName @client
                }
                cursor
            }
            pageInfo {
                endCursor
                hasNextPage
                total
            }
        }
    }
`;
