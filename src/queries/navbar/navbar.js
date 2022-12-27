import { gql } from '@apollo/client'

export const GET_MENU = gql`
query GetMenuTree {
  getMenuTree {
    aResults {
      _id
      eStatus
      sTitle
    }
  }
}
`