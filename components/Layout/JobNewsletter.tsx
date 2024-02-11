import { css } from '@emotion/react'
import { memo, useState } from 'react'
import { flex } from '@/modules/styling/flex'

import { Job, Newsletter } from './type'

const JobNewsletter = memo<ReactProps<{ datum: Job; datumNews: Newsletter }>>(
  function JobNewsletter({ datum, datumNews }) {
    const [expand, setExpand] = useState(true)

    return (
      <div
        css={css`
          position: relative;
          padding: 80px 16px;
          background: white;
          @media (max-width: 600px) {
            margin: 16px;
          }
        `}
      >
        <>
          <div css={barTextCss}>{datum.company}</div>

          <div css={flex.h.default}>
            <h6
              css={css`
                color: #7a7a7a;
                margin-right: 4px;
              `}
            >
              Industry /
            </h6>

            <h6>{datumNews.industry}</h6>
          </div>
          <h2
            css={css`
              margin: 12px 0;
            `}
          >
            {datumNews.title}
          </h2>
          <ul
            css={css`
              padding-left: 16px;
              font-size: 20px;
              color: #6a6a6a;
            `}
          >
            {datumNews.subtitle.map((item, idx) => (
              <li
                css={css`
                  line-height: 1.5;
                `}
                key={idx}
              >
                {item}
              </li>
            ))}
          </ul>
          {datumNews.content.map((item, idx) => (
            <p
              css={css`
                margin-top: 24px;
                line-height: 1.5;
              `}
              key={idx}
            >
              {item}
            </p>
          ))}
        </>
      </div>
    )
  },
)

const barTextCss = css`
  font-size: 32px;
  font-weight: 700;
`

export default JobNewsletter
