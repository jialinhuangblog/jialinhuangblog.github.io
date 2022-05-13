import { Global, css } from "@emotion/react";
import { NextPage } from "next";
import { AppProps } from "next/app";

const MyApp: NextPage<AppProps> = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Global
        styles={css`
          html {
            scroll-behavior: smooth;
            height: 100vh;
            width: 100vw;
            box-sizing: border-box;
            overflow: hidden;
          }
          body,
          #__next {
            padding: 1px;
            margin: 0;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
          }
        `}
      ></Global>
      <Component {...pageProps} />;
    </>
  );
};
export default MyApp;
