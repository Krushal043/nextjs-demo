import { gql } from '@apollo/client'

export const GET_FOOTER = gql`
  query GetFrontFooter {
    getFrontFooter {
      _id
      eType
      aResults {
        _id
        sTitle
        sUrl
      }
    }
  }
`