'use client'
import { css } from '@emotion/react'
import { memo } from 'react'
import { News } from '@/app/css-decode/horizontal-slider/newsdata'
import { flex } from '@/modules/styling/flex'

const NewsCard = memo<ReactProps<{ datum: News; color: string }>>(function NewsCard({
  datum,
  color,
}) {
  return (
    <div
      css={css`
        ${flex.v.default}
        padding: 16px 0 0;
        background: ${color};
        margin: 20px 20px 0;
        border-radius: 8px;
        min-width: 400px;
        max-height: 80vh;
        @media (max-width: 900px) {
          min-width: 240px;
          max-height: auto;
          padding: 8px 0 0;
        }
      `}
    >
      <div
        css={css`
          ${flex.h.default}
          padding: 0 16px;
          @media (max-width: 900px) {
            padding: 0 8px;
            ${flex.v.default}
          }
        `}
      >
        <div
          css={css`
            color: ${color};
            background-color: black;
            border-radius: 4px;
            padding: 4px;
            font-size: 12px;
            margin-right: auto;
          `}
        >
          {datum.category.split('/')[1]}
        </div>
        <p
          css={css`
            @media (max-width: 900px) {
              font-size: 12px;
            }
          `}
        >
          {datum.date}
        </p>
      </div>
      <p
        css={css`
          padding: 0 16px;
          font-size: 18px;
          font-weight: 700;
          margin: 16px 0;
          @media (max-width: 900px) {
            font-size: 12px;
            padding: 0 8px;
          }
        `}
      >
        {datum.title.toUpperCase()}
      </p>

      <img
        src={datum.img}
        alt={datum.title}
        css={css`
          width: 100%;
          flex: 1;
          border-radius: 0 0 8px 8px;
          object-fit: cover;
          max-height: 70%;
          margin-top: auto;
        `}
      />
    </div>
  )
})

export default NewsCard
