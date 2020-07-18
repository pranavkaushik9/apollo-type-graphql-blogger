import { gql } from "@apollo/client";

export const getPost = gql`
    query($id: String!) {
        post(id: $id) {
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
            } 
        }
    }
`;
