import { gql } from '@apollo/client'

export const GET_REPOSITORIES = gql`
    query {
        repositories {
            edges {
                node {
                    fullName
                    id
                    forksCount
                    description
                    language
                    ownerAvatarUrl
                    stargazersCount
                    reviewCount
                    ratingAverage
                }
            }
        }
    }
`