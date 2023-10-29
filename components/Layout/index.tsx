import { memo } from 'react'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { Paper } from '@mui/material'
import { flex } from '~/modules/styling/flex'
import useMedia from '~/modules/styling/useMedia'
import { themeProxy } from '~/modules/styling/themes'
import DateTime from '~/components/Layout/DateTime'
import Window98Start from './Window98Start'
import Link from 'next/link'
import { useSnapshot } from 'valtio'

const Layout = memo<ReactProps>(function Layout(props) {
  const { isPc } = useMedia()
  const { color } = useSnapshot(themeProxy)

  const router = useRouter()
  return (
    <Paper
      css={css`
        ${isPc ? flex.h.default : flex.h.default};
        height: calc(100vh - 40px);
        overflow: auto;
        position: relative;
        background: ${color}44;
        p {
          text-decoration-color: ${color};
        }
      `}
    >
      {/* <div
        css={css`
          position: fixed;
          left: 16px;
          top: 20px;
          font-size: ${isPc ? 20 : 12}px;
          font-weight: 600;
          color: ${color};
          text-transform: uppercase;
        `}
      >
        {router.asPath}
      </div> */}
      <div
        css={css`
          position: fixed;
          right: 16px;
          top: 2px;
        `}
      >
        {/* <IconButton
            css={toggleBtnCss}
            color='secondary'
            onClick={() => {
              setTheme(theme === 'light' ? 'dark' : 'light')
            }}
            size='large'
          >
            {theme === 'dark' ? <MdOutlineWbSunny /> : <MdDarkMode />}
          </IconButton> */}
      </div>
      {props.children}

      <div
        css={css`
          position: fixed;
          ${flex.h.crossCenter};
          bottom: 0;
          z-index: 2;
          width: 100%;
          background: ${color};
          padding: 2px 0;
          ${flex.h.crossCenter};
          border-top: 4px solid white;
        `}
      >
        <Window98Start color={color} />
        <div css={dividerCss} />
        {/* tasks */}
        <Link
          href={'/'}
          css={router.asPath === '/' ? selectedtaskItemCss : defaultTaskCss}
        >
          root
        </Link>

        <Link
          href='/cv'
          css={router.asPath === '/cv' ? selectedtaskItemCss : defaultTaskCss}
        >
          cv
        </Link>
        <div
          css={css`
            ${dividerCss}
            margin-left: auto;
          `}
        ></div>
        <DateTime />
      </div>
    </Paper>
  )
})

const dividerCss = css`
  width: 2px;
  height: 32px;
  box-shadow: inset 1px 0 0 0 white, inset -1px 0 0 0 #7d7d7d;
  margin: 0 4px;
`
const defaultTaskCss = css`
  cursor: pointer;
  width: 200px;
  color: white;
  padding: 4px 8px;
  border-top: 1px solid white;
  border-left: 1px solid white;
  border-right: 1px solid black;
  border-bottom: 1px solid black;
  box-shadow: inset 1px 0 0 0 white, inset -1px 0 0 0 #7d7d7d;
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

const selectedtaskItemCss = css`
  ${defaultTaskCss};
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  box-shadow: inset 2px 2px 0 0 #7d7d7d, inset -2px -2px 0 0 #ffffff;
  margin: 0 4px;
`

export default Layout
