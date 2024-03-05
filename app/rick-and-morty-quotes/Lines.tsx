'use client'
import { flex } from '@/modules/styling/flex'
import { css } from '@emotion/react'
import { memo } from 'react'
import useTextScramble from './useTextScramble'

const Lines = memo(function Lines(props) {
  const r = useTextScramble(PHRASES, 4000)

  return (
    <>
      <div
        css={css`
          background: url('/rm-desktop.jpg');
          background-position: center;
          background-size: cover;
          ${flex.h.default};
          width: 100vw;
          height: 100vh;
          @media (max-width: 600px) {
            background-position: 62% 40px;
          }
        `}
      ></div>
      <div
        ref={r}
        css={css`
          position: absolute;
          font-size: 32px;
          color: white;
          padding: 16px;
          height: 100vh;
          width: 100vw;
          top: 0;
          left: 0;
          background: radial-gradient(transparent, rgba(255, 255, 255, 0.2) 2px);
          background-size: 8px 8px;
          backdrop-filter: blur(1px);
        `}
      ></div>
    </>
  )
})

const PHRASES: string[] = [
  'When I Don‘t Like Something About The World, I Change It.',
  'Wubba Lubba Dub Dub.',
  'To Live Is To Risk It All-Otherwise, you’re just an inert chunk of randomly assembled molecules drifting wherever the universe blows you.',
  'You Still Have A Right To Take Anything You Want Seriously.',
  "None Of Them Have To Be Responsible. They're All Victims Of Themselves.",
]

export default Lines
