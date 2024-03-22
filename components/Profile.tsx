'use client'
import { memo } from 'react'
import { css } from '@emotion/react'

import Link from 'next/link'
import { flex } from '@/modules/styling/flex'

const Profile = memo(function Profile() {
  return (
    <div
      css={css`
        width: 480px;
        border-radius: 4px;
        position: relative;
        padding: 32px 32px;
        margin: 40px auto;
        background: transparent;
        background-color: white;
        border-radius: 4px;
        overflow-y: auto;
        scrollbar-width: none; /* Firefox */
        @media (max-width: 600px) {
          width: 100%;
          height: 100vh;
          border-radius: 0;
          margin: 0;
          border-radius: 0;
        }
      `}
    >
      <div
        css={css`
          position: absolute;
          width: 100%;
          height: 29px;
          left: 0;
          top: 0;
          background: #e5e62b;

          border-radius: 4px 4px 0 0;
          display: block;

          @media (max-width: 600px) {
            display: none;
          }
        `}
      />
      <div
        css={css`
          ${flex.h.crossCenter};
          gap: 8px;
          padding-top: 8px;
        `}
      >
        {/* // eslint-disable-next-line @next/next/no-img-element */}
        <img
          css={css`
            border-radius: 50%;
            width: 48px;
            height: 48px;
          `}
          alt='avatar'
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
        Having about six years of experience in development, I&#39;ve gone from focusing on frontend
        to mastering full-stack dev. NOW diving into the world of cloud technologies to broaden sw
        skills and explore new opportunities.
      </p>
      <p css={keyCss}>Location</p>
      <div css={valueCss}>Taipei</div>
      <p css={keyCss}>Company</p>
      <div css={valueCss}>Confetti</div>
      {/* {isPhone ? null : (
        <>
          <p css={keyCss}>MBTI</p>
          <div css={valueCss}>INTJ</div>
        </>
      )} */}
      <p css={keyCss}>References</p>
      <div
        css={css`
          ${flex.h.default};
          pointer-events: initial;
          gap: 8px;
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
      </div>
      <p css={keyCss}>My favorite motto</p>
      <div css={valueCss}>
        To live is to risk it all Otherwise you are just an inert chunk of randomly assembled
        molecules drifting wherever the Universe blows you
      </div>
      <p css={keyCss}>Toys</p>
      <div
        css={css`
          ${flex.v.default};
          pointer-events: initial;
          gap: 8px;
        `}
      >
        <Link
          css={referenceLinkCss}
          href='./angular-chunk-versatile'
        >
          My Tech stack (Angular, firebase) 👈👈
        </Link>
        <Link
          css={referenceLinkCss}
          href='./rick-and-morty-quotes'
        >
          Rick & Morty Quotes 👈👈
        </Link>
        <Link
          css={referenceLinkCss}
          href='./css-decode/horizontal-slider'
        >
          CSS - Vertical Scroll, Horizontal Control
        </Link>

        <Link
          css={referenceLinkCss}
          href='./css-decode/sliding-windows'
        >
          CSS - Vertical Sliding Windows
        </Link>
        <Link
          css={referenceLinkCss}
          href='./game-of-life'
        >
          Conway&#39;s Game of life
        </Link>
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
  font-size: 18px;
  margin: 16px 0 8px;
`

const valueCss = css`
  font-weight: 400;
  line-height: 22px;
  color: #666;
`

const referenceLinkCss = css`
  padding: 4px 0;
  text-decoration: underline;

  &,
  &:hover,
  &:active {
    color: #666;
  }
`
export default Profile
