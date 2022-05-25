import { useEffect, useState, memo } from 'react'
import { css } from '@emotion/react'
import { useRouter } from 'next/router'
import { Paper, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { flex } from '~/modules/styling/flex'
import useMedia from '~/modules/styling/useMedia'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from '~/modules/styling/themes'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'
import palettes from '~/modules/styling/palettes'

const toggleBtnCss = css`
  border: 0;
  border-radius: 0;
`

const Layout = memo<ReactProps>(function Layout(props) {
  const { isPc } = useMedia()
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')
  const router = useRouter()
  useEffect(() => {
    const lightMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (lightMedia.matches) setTheme('light')
  }, [])

  const color = palettes[Math.floor(Math.random() * palettes.length)]
  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Paper
        css={css`
          font-family: 'Fira Sans', sans-serif;
          ${isPc ? flex.h.default : flex.h.default};
          height: 100vh;
          overflow: auto;
          position: relative;
          p {
            text-decoration-color: ${color};
          }
        `}
      >
        <div
          css={css`
            position: fixed;
            left: 0;
            top: 0;
            width: 12px;
            height: 100%;
            background: ${color};
          `}
        />
        <div
          css={css`
            position: fixed;
            left: 16px;
            top: 20px;
            width: 12px;
            font-size: ${isPc ? 20 : 12}px;
            font-weight: 600;
            color: ${color};
            text-transform: uppercase;
          `}
        >
          {router.asPath}
        </div>
        <div
          css={css`
            position: absolute;
            right: 16px;
            top: 2px;
          `}
        >
          <ToggleButtonGroup
            size='small'
            value={theme}
            onChange={() => {
              setTheme(theme === 'light' ? 'dark' : 'light')
            }}
          >
            <ToggleButton
              css={toggleBtnCss}
              value='light'
            >
              <MdDarkMode />
            </ToggleButton>
            <ToggleButton
              css={toggleBtnCss}
              value='dark'
            >
              <MdOutlineLightMode />
            </ToggleButton>
          </ToggleButtonGroup>
        </div>
        {props.children}
      </Paper>
    </ThemeProvider>
  )
})
export default Layout
