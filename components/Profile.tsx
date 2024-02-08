import { css } from '@emotion/react'
import { Avatar } from '@mui/material'
import Link from 'next/link'
import { memo } from 'react'
import { flex } from '~/modules/styling/flex'
import useMedia from '~/modules/styling/useMedia'

const Profile = memo(function Profile() {
  const { isPc, isPhone } = useMedia()

  return (
    <div
      css={css`
        width: ${isPhone ? '100%' : '480px'};
        border-radius: ${isPc ? 4 : 0}px;
        position: relative;
        padding: 32px 32px;
        margin: ${isPhone ? 0 : 40}px auto 0px;
        user-select: none;
        background: transparent;
        pointer-events: none;
        background-color: white;
        border-radius: ${isPhone ? 0 : 4}px;
        height: ${isPhone ? '100vh' : 'max-content'};
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
            background: #e5e62b;
            border-radius: 4px 4px 0 0;
          `}
        />
      )}

      <div
        css={css`
          ${flex.h.crossCenter};
          gap: 8px;
          padding-top: 8px;
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
          ${flex.h.default};
          pointer-events: initial;
        `}
      >
        <Link
          target='_blank'
          href='https://www.linkedin.com/in/jlhuangprogramming/'
          css={referenceLinkCss}
        >
          Linkedin
        </Link>
        <Link
          target='_blank'
          href='https://github.com/jialinhuang00'
          css={referenceLinkCss}
        >
          Github
        </Link>
        <Link
          css={referenceLinkCss}
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

const descriptionCss = css`
  font-size: 16px;
  line-height: 22px;
  margin-top: 24px;
`
const keyCss = css`
  font-weight: 600;
  margin: 24px 0 8px;
`

const valueCss = css`
  font-weight: 400;
  line-height: 22px;
  color: #666;
`

const referenceLinkCss = css`
  ${flex.h.allCenter};
  padding: 4px 4px 4px 0;
  text-decoration: underline;
  text-underline-offset: 4px;

  &,
  &:hover,
  &:active {
    color: #666;
  }
`
export default Profile
