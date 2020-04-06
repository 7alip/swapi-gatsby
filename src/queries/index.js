import { gql } from "@apollo/client"

export const GET_PEOPLE = gql`
  query getPeople($text: String!) {
    allPersons(filter: { name_contains: $text }) {
      id
      name
      birthYear
      gender
      height
      films {
        title
        id
      }
    }
  }
`
