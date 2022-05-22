import { useEffect, useState, memo } from 'react'
import { NextPage } from 'next'
import { css } from '@emotion/react'
import { Paper, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { flex } from '~/modules/styling/flex'
import useMedia from '~/modules/styling/useMedia'
import { ThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from '~/modules/styling/themes'
import { MdDarkMode, MdOutlineLightMode } from 'react-icons/md'

const toggleBtnCss = css`
  border: 0;
  border-radius: 0;
`

const Layout = memo<ReactProps>(function Layout(props) {
  const { isPc } = useMedia()
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const lightMedia = window.matchMedia('(prefers-color-scheme: light)')
    if (lightMedia.matches) setTheme('light')
  }, [])

  return (
    <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
      <Paper
        css={css`
          font-family: 'Fira Sans', sans-serif;
          ${isPc ? flex.h.default : flex.h.default};
          height: 100vh;
          overflow: auto;
          position: relative;
        `}
      >
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
