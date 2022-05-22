import { css } from '@emotion/react'

const jc_spaceBetween = css`
  justify-content: space-between;
`
const jc_spaceAround = css`
  justify-content: space-around;
`
const jc_spaceEvenly = css`
  justify-content: space-evenly;
`
const jc_flexStart = css`
  justify-content: flex-start;
`
const jc_flexEnd = css`
  justify-content: flex-end;
`
const jc_stretch = css`
  justify-content: stretch;
`
const jc_center = css`
  justify-content: center;
`

export const jc = {
  spaceBetween: jc_spaceBetween,
  spaceAround: jc_spaceAround,
  spaceEvenly: jc_spaceEvenly,
  flexStart: jc_flexStart,
  flexEnd: jc_flexEnd,
  center: jc_center,
  stretch: jc_stretch,
}

export const main_center = jc_center

const ai_flexStart = css`
  align-items: flex-start;
`

const ai_flexEnd = css`
  align-items: flex-end;
`
const ai_center = css`
  align-items: center;
`

const ai_stretch = css`
  align-items: stretch;
`

export const ai = {
  flexStart: ai_flexStart,
  flexEnd: ai_flexEnd,
  center: ai_center,
  stretch: ai_stretch,
}

const horizontal = css`
  display: flex;
  flex-direction: row;
`
const vertical = css`
  display: flex;
  flex-direction: column;
`

const inline = css`
  display: inline-flex;
`

const inline_horizontal_all_center = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const inline_horizontal_main_center = css`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
`

const inline_horizontal_cross_center = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`
const horizontal_all_center = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
const horizontal_main_center = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const horizontal_cross_center = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const vertical_all_center = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const vertical_cross_center = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const vertical_main_center = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const wrap_horizontal = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const wrap_horizontal_all_center = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

const wrap_horizontal_cross_center = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`

const wrap_horizontal_main_center = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const wrap_vertical = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`
const wrap_vertical_all_center = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const wrap_vertical_cross_center = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`

const wrap_vertical_main_center = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`

export const flex = {
  h: {
    default: horizontal,
    allCenter: horizontal_all_center,
    mainCenter: horizontal_main_center,
    crossCenter: horizontal_cross_center,
  },
  v: {
    default: vertical,
    allCenter: vertical_all_center,
    mainCenter: vertical_main_center,
    crossCenter: vertical_cross_center,
  },
  inline: {
    default: inline,
    allCenter: inline_horizontal_all_center,
    mainCenter: inline_horizontal_main_center,
    crossCenter: inline_horizontal_cross_center,
  },
  wrap: {
    default: wrap_horizontal,
    allCenter: wrap_horizontal_all_center,
    mainCenter: wrap_horizontal_main_center,
    crossCenter: wrap_horizontal_cross_center,
  },
  verticalWrap: {
    default: wrap_vertical,
    allCenter: wrap_vertical_all_center,
    mainCenter: wrap_vertical_main_center,
    crossCenter: wrap_vertical_cross_center,
  },
}
