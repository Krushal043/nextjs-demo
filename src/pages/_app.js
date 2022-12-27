import React from "react";
import App from "next/app";
import { ApolloProvider } from "@apollo/client";
import PropTypes from "prop-types";

import "@assets/styles/global.scss";
import MainLayout from "@layouts/main/MainLayout";
import client from "@queries/apollo-client";
import { GET_MENU } from "@queries/navbar/navbar";
import { GET_FOOTER } from "@queries/footer/footer";

export default function MyApp({ Component, pageProps, menu, footerData }) {
  return (
    <ApolloProvider client={client}>
      <MainLayout menu={menu} footerData={footerData}>
        <Component {...pageProps} />
      </MainLayout>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);

  const { data } = await client.query({
    query: GET_MENU,
  });

  const { data: footerData } = await client.query({
    query: GET_FOOTER,
  });

  return {
    ...appProps,
    menu: data.getMenuTree.aResults,
    footerData: footerData.getFrontFooter,
  };
};

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
  menu: PropTypes.array,
  footerData: PropTypes.array,
};
