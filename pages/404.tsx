import { css } from '@emotion/react'
import { NextPage } from 'next'
import Link from 'next/link'
import { flex } from '~/modules/styling/flex'

const FourOFour: NextPage = () => {
  return (
    <>
      <div
        css={css`
          opacity: 0.00001;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        `}
      >
        <iframe
          width='100%'
          height='100%'
          src='https://www.youtube.com/embed/9Z1IGjr2cT0?autoplay=1&mute=0&loop=1&autohide=1'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe>
      </div>

      <div
        css={css`
          ${flex.h.allCenter}
          font-family: 'Fira Sans', sans-serif;
          opacity: 1;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          font-size: 0.5rem;
          pointer-events: none;
        `}
      >
        nothing here
      </div>
    </>
  )
}
export default FourOFour
