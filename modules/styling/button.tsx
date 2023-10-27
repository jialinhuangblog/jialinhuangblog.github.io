import { css } from '@emotion/react'

export const activeBtnCss = css`
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  box-shadow: inset 1px 1px 0 0 #7d7d7d;
`
export const normalStateBtnCss = css`
  border-top: 2px solid white;
  border-left: 2px solid white;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  box-shadow: inset -1px -1px 0 0 #7d7d7d;
`

export const defaultBtnCss = css`
  ${normalStateBtnCss}
  &:active {
    ${activeBtnCss};
  }
`
