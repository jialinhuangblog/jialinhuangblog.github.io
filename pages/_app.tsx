import { Global, css } from '@emotion/react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { Merriweather } from 'next/font/google'
import { Roboto } from 'next/font/google'
const merriweather = Merriweather({ subsets: [], weight: ['300', '400', '700'] })
const roboto = Merriweather({ subsets: [], weight: ['300', '400', '700'] })
const MyApp: NextPage<AppProps> = props => {
  const { Component, pageProps } = props
  return (
    <>
      <Global
        styles={css`
          * {
            box-sizing: border-box;
            font-family: ${roboto.style.fontFamily};
            font-style: ${roboto.style.fontStyle};
            line-height: 1.4;
            margin: 0;
            h1,
            h2,
            h3 {
              font-family: ${merriweather.style.fontFamily};
              font-style: ${merriweather.style.fontStyle};
            }
          }
          html {
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
