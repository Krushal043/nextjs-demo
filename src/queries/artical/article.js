import { gql } from '@apollo/client'

export const GET_ARTICLE = gql`
  query GetHomePageArticle {
    getHomePageArticle {
      nTotal
      aResults {
        sName
        aArticle {
          _id
          sTitle
          sSubtitle
          sSrtTitle
          oImg {
            sText
            sUrl
          }
          dPublishDate
          dPublishDisplayDate
          nDuration
          sDescription
          sType
        }
      }
    }
  }
`
