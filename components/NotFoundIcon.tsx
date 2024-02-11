'use client'
import { css } from '@emotion/react'
import { memo } from 'react'
import { flex } from '@/modules/styling/flex'

const NotFoundIcon = memo(function NotFoundIcon() {
  return (
    <p
      css={css`
        ${flex.h.allCenter};
        font-size: 48px;
        width: 100%;
        user-select: none;
      `}
    >
      👷‍♂️👷‍♀️🚧👷‍♀️👷‍♂️
    </p>
  )
})

export default NotFoundIcon
