'use client'
import { css } from '@emotion/react'
import { memo, useState } from 'react'
import { flex } from '@/modules/styling/flex'

import { Job } from '../../components/Layout/type'
import Link from 'next/link'
import useMedia from '@/modules/styling/useMedia'

const JobCard = memo<ReactProps<{ datum: Job }>>(function JobCard(props) {
  const job = props.datum
  const [expand, setExpand] = useState(true)

  const { isPhone } = useMedia()
  return (
    <div
      css={css`
        position: relative;
        padding: ${expand ? 16 : 16}px ${isPhone ? 8 : 16}px;
        background: white;
        margin: 20px ${isPhone ? 16 : 0}px;
        border-radius: 4px;
      `}
    >
      <div
        onClick={() => setExpand(prev => !prev)}
        css={css`
          cursor: pointer;
          ${flex.h.crossCenter};
          gap: 16px;
          top: 0px;
          font-size: ${isPhone ? 14 : 24}px;
        `}
      >
        <div css={barTextCss}>{job.company}</div>
        <div
          css={css`
            font-size: ${isPhone ? 16 : 24}px;
            font-weight: 700;
          `}
        >
          {job.timeline}
        </div>
      </div>
      <div
        onClick={() => {
          setExpand(prev => !prev)
        }}
        css={css`
          position: absolute;
          right: 0;
          top: 0;
          z-index: 1;
          width: 40px;
          height: 40px;
          ${flex.h.allCenter};
          cursor: pointer;
          opacity: 0;

          &:hover {
            opacity: 1;
          }
        `}
      >
        {expand ? '-' : '+'}
      </div>
      {expand ? (
        <div
          css={css`
            ${flex.v.default};
            height: min-content;
          `}
        >
          {/* position,time */}
          <div css={flex.v.default}>
            <div css={positionCss}>{job.position}</div>
          </div>
          {/* tech tags, desc */}
          <div>
            {job.project.map((p, i) => (
              <div
                key={i}
                css={css`
                  margin-top: 16px;
                  padding-top: 16px;
                  margin-left: 16px;
                  border-top: 1px solid #666;
                `}
              >
                {p.projectIsLink ? (
                  <Link
                    css={projectCss}
                    href={'https://' + p.name}
                  >
                    {p.name}
                  </Link>
                ) : (
                  <div css={projectCss}>{p.name}</div>
                )}
                <div css={labelCss}>chores</div>
                {typeof p.stuff === 'string' ? (
                  <div
                    css={css`
                      line-height: 30px;
                      @media (max-width: 600px) {
                        line-height: 22px;
                      }
                    `}
                  >
                    {p.stuff}
                  </div>
                ) : (
                  <ul>
                    {p.stuff.map(s => {
                      return typeof s === 'string' ? (
                        <li
                          css={css`
                            line-height: 30px;
                            @media (max-width: 600px) {
                              line-height: 22px;
                            }
                          `}
                          key={s}
                        >
                          {s}
                        </li>
                      ) : (
                        <li
                          css={css`
                            line-height: 30px;
                            color: #666;
                            @media (max-width: 600px) {
                              line-height: 22px;
                            }
                          `}
                          key={s.title}
                        >
                          <b
                            css={css`
                              color: black;
                            `}
                          >
                            {s.title}
                          </b>
                          {s.details}
                        </li>
                      )
                    })}
                  </ul>
                )}
                <div css={labelCss}>gadgets</div>
                <div
                  css={css`
                    ${flex.wrap.default};
                    gap: 8px;
                  `}
                >
                  {p.techStack.map((tag, index) => (
                    <div
                      css={css`
                        background: #e5e62b;
                        font-size: 16px;
                        line-height: 22px;
                        border-bottom: 3px solid #e5e62b;
                        padding: 4px 8px;
                        border-radius: 8px;
                      `}
                      key={tag}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  )
})

const labelCss = css`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
  margin-top: 16px;
`
const projectCss = css`
  font-size: 30px;
  font-weight: 700;
  &:visited,
  & {
    color: inherit;
  }
  @media (max-width: 900px) {
    font-size: 22px;
  }
`

const positionCss = css`
  font-size: 24px;
  font-weight: 700;
  margin-left: 16px;
  @media (max-width: 600px) {
    font-size: 20px;
  }
`

const barTextCss = css`
  font-size: 32px;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 24px;
  }
`

export default JobCard
