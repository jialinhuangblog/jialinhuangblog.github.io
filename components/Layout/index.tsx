'use client'
import { memo } from 'react'
import { css } from '@emotion/react'
import { usePathname } from 'next/navigation'
import { flex } from '@/modules/styling/flex'
import DateTime from '@/components/Layout/DateTime'
import Window98Start from '@/components/Layout/Window98Start'
import Link from 'next/link'

const Layout = memo<ReactProps<{ background?: string; hideTaskbar?: boolean }>>(function Layout(
  props,
) {
  const color = '#054D77'
  const path = usePathname()
  return (
    <div
      css={css`
        ${flex.h.default};
        height: calc(100vh - 40px);
        overflow: auto;
        position: relative;
        background: ${props.background ?? color};
        animation: b 0.5s infinite alternate;
        @keyframes b {
          100% {
            background-position: 9% 49%, 50% 50%;
          }
        }
        p {
          text-decoration-color: ${color};
        }
        @media (min-width: 1200px) {
          ${flex.h.default}
        }
      `}
    >
      {props.children}

      {props.hideTaskbar ? null : (
        <div
          css={css`
            position: fixed;
            ${flex.h.crossCenter};
            bottom: 0;
            z-index: 2;
            width: 100%;
            background: ${color};
            height: 40px;
            border-top: 1px solid white;
            ${flex.h.crossCenter};
          `}
        >
          <Window98Start color={color} />
          <div css={dividerCss} />
          {/* Tabs */}
          <Link
            href={'/'}
            css={path === '/' ? selectedTabItemCss : defaultTabCss}
          >
            ./
          </Link>

          <Link
            href='/cv'
            css={path === '/cv' ? selectedTabItemCss : defaultTabCss}
          >
            ./cv
          </Link>
          <div
            css={css`
              ${dividerCss}
              margin-left: auto;
            `}
          ></div>
          <DateTime />
        </div>
      )}
    </div>
  )
})

const dividerCss = css`
  width: 2px;
  height: 32px;
  box-shadow: inset 1px 0 0 0 white, inset -1px 0 0 0 #7d7d7d;
  margin: 0 4px;
`
const defaultTabCss = css`
  cursor: pointer;
  width: 200px;
  padding: 0 4px;
  @media (max-width: 600px) {
    width: 48px;
    font-size: 12px;
  }
  color: white;
  height: 100%;
  ${flex.h.crossCenter}
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  box-shadow: inset inset -1px 0 0 0 #7d7d7d;
  margin: 0 4px;
  text-decoration: none;
  &:active {
    border-top: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    box-shadow: inset 1px 1px 0 0 #7d7d7d;
  }
`

const selectedTabItemCss = css`
  ${defaultTabCss};
  box-shadow: inset 2px 2px 0 0 #7d7d7d, inset -2px -2px 0 0 #ffffff;
  margin: 0 4px;
`

export default Layout
