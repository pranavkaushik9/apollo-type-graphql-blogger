import { gql } from "@apollo/client";

export const getPosts = gql`
    query($authorId: ID, $blogId: ID, $first: Int!, $cursor: ID) {
        posts(authorId: $authorId, blogId: $blogId, first: $first, cursor: $cursor) {
            edges{
                node {
                    id
                    title
                    body
                    isBookmarked @client
                    author {
                            id
                            firstName
                            lastName
                        }
                        blog {
                            id
                            name
                            category
                        }
                }
            }
            pageInfo {
                endCursor
                hasNextPage
                total
            }
        }
    }
`;
