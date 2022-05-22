import { Global, css } from '@emotion/react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'

const MyApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
          }
          html {
            height: 100vh;
            width: 100vw;
            overflow: hidden;
            scroll-behavior: smooth;
          }
          body {
            margin: 0;
          }
        `}
      ></Global>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
