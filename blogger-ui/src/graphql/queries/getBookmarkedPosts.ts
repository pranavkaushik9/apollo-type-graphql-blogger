import { gql } from "@apollo/client";

export const getBookmarkedPosts = gql`
    query bookmarkedPosts {
        bookmarkedPosts @client
    }
`;
