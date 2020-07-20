import { gql } from "@apollo/client";

export const getSiteUser = gql`
    query siteUser {
        siteUser @client
    }
`;
