import { css } from "@emotion/react";

const jc_spaceBetween = css`
  justify-content: space-between;
`;
const jc_spaceAround = css`
  justify-content: space-around;
`;
const jc_spaceEvenly = css`
  justify-content: space-evenly;
`;
const jc_flexStart = css`
  justify-content: flex-start;
`;
const jc_flexEnd = css`
  justify-content: flex-end;
`;
const jc_stretch = css`
  justify-content: stretch;
`;
const jc_center = css`
  justify-content: center;
`;

export const jc = {
  spaceBetween: jc_spaceBetween,
  spaceAround: jc_spaceAround,
  spaceEvenly: jc_spaceEvenly,
  flexStart: jc_flexStart,
  flexEnd: jc_flexEnd,
  center: jc_center,
  stretch: jc_stretch,
};

export const main_center = jc_center;

const ai_flexStart = css`
  align-items: flex-start;
`;

const ai_flexEnd = css`
  align-items: flex-end;
`;
const ai_center = css`
  align-items: center;
`;

const ai_stretch = css`
  align-items: stretch;
`;

export const ai = {
  flexStart: ai_flexStart,
  flexEnd: ai_flexEnd,
  center: ai_center,
  stretch: ai_stretch,
};

/**
 * 以下COMBO
 * 常見的組合可以另外寫
 * 但不延用上面已經宣告的css，因為在html生成上會過長、顯現的字串意義不大
 * main => 主線，在水平排列就是指x軸，在垂直排列下就是指y軸，cross則相反。
 */

const horizontal = css`
  display: flex;
  flex-direction: row;
`;
const vertical = css`
  display: flex;
  flex-direction: column;
`;

const inline = css`
  display: inline-flex;
`;

const inline_horizontal_all_center = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const inline_horizontal_main_center = css`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
`;

const inline_horizontal_cross_center = css`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
`;
const horizontal_all_center = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const horizontal_main_center = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const horizontal_cross_center = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const vertical_all_center = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const vertical_cross_center = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const vertical_main_center = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const wrap_horizontal = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const wrap_horizontal_all_center = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const wrap_horizontal_cross_center = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const wrap_horizontal_main_center = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const wrap_vertical = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;
const wrap_vertical_all_center = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const wrap_vertical_cross_center = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
`;

const wrap_vertical_main_center = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
`;
/**
 * 將常用先包起來
 *
 * h => horizontal,
 * c => 第一個碰到的是針對 main axis，第二個 c 則是 cross axis
 * v => vertical
 */
export const flex = {
  h: {
    /** 預設橫著排 */
    default: horizontal,
    /** 橫著排，水平方向集中在中間，垂直也是在中間 */
    allCenter: horizontal_all_center,
    /** 橫著排，水平方向集中在中間，垂直預設從上而下 */
    mainCenter: horizontal_main_center,
    /** 橫著排，東西從左到右，垂直方向在中間 */
    crossCenter: horizontal_cross_center,
  },
  v: {
    /** 預設直著排 */
    default: vertical,
    /** 直著排，垂直方向集中在中間，水平方向也是在中間 */
    allCenter: vertical_all_center,
    /** 直著排，垂直方向是集中在中間，水平則從左到右 */
    mainCenter: vertical_main_center,
    /** 直著排，垂直從上到下，水平方向在中間 */
    crossCenter: vertical_cross_center,
  },
  inline: {
    /** container 是 flexbox，但 container 本身是 inline 性質 */
    default: inline,
    /** 橫著排，水平方向集中在中間，垂直也是在中間 */
    allCenter: inline_horizontal_all_center,
    /** 橫著排，水平方向集中在中間，垂直預設從上而下 */
    mainCenter: inline_horizontal_main_center,
    /** 橫著排，東西從左到右，垂直方向在中間 */
    crossCenter: inline_horizontal_cross_center,
  },
  wrap: {
    /** container 是 flexbox，且裡面的 items 會順著從左到右，再由上到下 flowing ... */
    default: wrap_horizontal,
    allCenter: wrap_horizontal_all_center,
    mainCenter: wrap_horizontal_main_center,
    crossCenter: wrap_horizontal_cross_center,
  },
  verticalWrap: {
    /** container 是 flexbox，且裡面的 items 會順著從上到下，再由左到右 flowing ... */
    default: wrap_vertical,
    allCenter: wrap_vertical_all_center,
    mainCenter: wrap_vertical_main_center,
    crossCenter: wrap_vertical_cross_center,
  },
};

