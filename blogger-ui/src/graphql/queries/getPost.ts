import { gql } from "@apollo/client";

export const getPost = gql`
    query($id: String!) {
        post(id: $id) {
            id
            title
            body
            author {
                id
                firstName
                lastName
            }
            blog {
                name
            } 
        }
    }
`;
