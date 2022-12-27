import React from "react";
import PropTypes from "prop-types";

import client from "@queries/apollo-client";
import { GET_ARTICLE } from "@queries/artical/article";

import HomePageLayout from "@layouts/homePage/HomePageLayout";
import ArticleList from "@components/article/ArticleList";

export default function Home({ homePageArticleData }) {
  return (
    <>
      <HomePageLayout>
        <ArticleList homePageArticleData={homePageArticleData} />
      </HomePageLayout>
    </>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: GET_ARTICLE,
  });

  return {
    props: { homePageArticleData: data.getHomePageArticle },
  };
}

Home.propTypes = {
  menu: PropTypes.array,
  homePageArticleData: PropTypes.object,
};
