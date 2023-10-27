import { css } from '@emotion/react'
import { Paper, Avatar } from '@mui/material'
import Link from 'next/link'
import { memo } from 'react'
import { RiLinkedinBoxFill, RiGithubFill, RiStackFill } from 'react-icons/ri'
import { defaultBtnCss } from '~/modules/styling/button'
import { globalOrange } from '~/modules/styling/colors'
import { ai, flex } from '~/modules/styling/flex'
import useMedia from '~/modules/styling/useMedia'

const descriptionCss = css`
  font-size: 16px;
  line-height: 22px;
`
const keyCss = css`
  font-weight: 600;
  margin: 24px 0 8px;
`

const valueCss = css`
  font-weight: 400;
  line-height: 22px;
`

const Profile = memo(function Profile() {
  const { isPc, isPhone } = useMedia()

  return (
    <div
      css={css`
        width: ${isPhone ? '100%' : '480px'};
        height: max-content;
        border-radius: ${isPc ? 4 : 0}px;
        position: relative;
        padding: 32px 32px;
        margin: ${isPhone ? 0 : 40}px auto 0px;
        user-select: none;
        background: transparent;
        pointer-events: none;
        background-color: white;

        ${isPhone
          ? ''
          : `  border-top: 4px solid transparent;
        border-left: 4px solid transparent;
        border-right: 4px solid black;
        border-bottom: 4px solid black;
        box-shadow: inset -2px -2px 2px 0 #7d7d7d, inset 2px 2px 2px 0 #adadad;`}
      `}
    >
      {!isPhone && (
        <div
          css={css`
            position: absolute;
            width: 100%;
            height: 29px;
            left: 0;
            top: 0;
            background: ${globalOrange.o600};
            border-radius: ${isPc ? 4 : 0}px ${isPc ? 4 : 0}px 0 0;
          `}
        />
      )}

      <div
        css={css`
          ${flex.h.crossCenter};
          gap: 8px;
        `}
      >
        <Avatar
          sx={{ width: isPhone ? 48 : 64, height: isPhone ? 48 : 64 }}
          src='https://lh3.googleusercontent.com/a-/AOh14GgT_31zBJDEEvfcpZc3v9I_8B7c_EHn1sXKJAY6Hw=s96-c'
        />
        <p
          css={css`
            margin: 0;
            font-size: 26px;
            font-weight: 700;
            letter-spacing: 1px;
            text-decoration: underline;
            text-underline-offset: 12px;
            text-decoration-thickness: 4px;
          `}
        >
          jialin.huang
        </p>
      </div>
      <p css={descriptionCss}>
        Around 4 years of web development experience, mostly doing frontend and a big fan of Golang
      </p>
      <p css={keyCss}>Location</p>
      <div css={valueCss}>Taipei</div>
      <p css={keyCss}>Company</p>
      <div css={valueCss}>Confetti</div>
      {isPhone ? null : (
        <>
          <p css={keyCss}>MBTI</p>
          <div css={valueCss}>INTJ</div>
        </>
      )}
      <p css={keyCss}>References</p>
      <div
        css={css`
          ${flex.h.crossCenter};
          & > * {
            flex: 1;
          }
          pointer-events: initial;
        `}
      >
        <Link
          target='_blank'
          href='https://www.linkedin.com/in/jlhuangprogramming/'
          css={linkCss}
        >
          Linkedin
        </Link>
        <Link
          target='_blank'
          href='https://github.com/jialinhuang00'
          css={linkCss}
        >
          Github
        </Link>
        <Link
          css={linkCss}
          href='./angular-chunk-versatile'
        >
          Skills
        </Link>
      </div>
      <p css={keyCss}>My favorite motto</p>
      <div css={valueCss}>
        To live is to risk it all Otherwise you are just an inert chunk of randomly assembled
        molecules drifting wherever the Universe blows you
      </div>
    </div>
  )
})

const linkCss = css`
  ${defaultBtnCss};
  ${flex.h.allCenter};
  padding: 4px 8px;
  text-decoration: none;
`
export default Profile
