import { css } from '@emotion/react'
import { memo, useState } from 'react'
import { flex } from '~/modules/styling/flex'
import palettes from '~/modules/styling/palettes'
import { Job } from './type'
import Link from 'next/link'
import useMedia from '~/modules/styling/useMedia'

const JobCard = memo<ReactProps<{ datum: Job; color: string }>>(function JobCard(props) {
  const job = props.datum
  const [expand, setExpand] = useState(true)
  const { isPhone } = useMedia()
  return (
    <div
      css={css`
        position: relative;
        padding: 40px 16px ${expand ? 16 : 0}px 16px;
        background: #cdcdcd;
        margin: ${expand ? 40 : 20}px 0 ${expand ? 40 : 0}px 0;
        border: 2px solid grey;
        border-top: 4px solid white;
        border-left: 4px solid white;
        border-right: 4px solid black;
        border-bottom: 4px solid black;
        box-shadow: inset -2px -2px 4px 0 #7d7d7d, inset 2px 2px 4px 0 #adadad;
        &:first-of-type {
          margin: 40px 0 ${expand ? 40 : 0}px 0;
        }
      `}
    >
      <div
        onClick={() => setExpand(prev => !prev)}
        css={css`
          cursor: pointer;
          position: absolute;
          left: 0px;
          right: 0px;
          ${flex.h.crossCenter};
          gap: 16px;
          top: 1px;
          height: 40px;
          padding: 0 8px;
          background: linear-gradient(to right, ${props.color}dd, ${props.color}88, white);
          z-index: 1;
          font-size: ${isPhone ? 14 : 24}px;
          color: white;
          &:hover {
            background: linear-gradient(to right, ${props.color}dd, ${props.color}dd, white);
          }
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
          right: 0px;
          top: 2px;
          z-index: 1;
          width: 38px;
          height: 38px;
          ${flex.h.allCenter};
          cursor: pointer;
          background: #ededed;
          border-top: 2px solid white;
          border-left: 2px solid white;
          border-right: 2px solid black;
          border-bottom: 2px solid black;
          ${biggerTextCss};
          &:hover {
            background: #eaeaea;
          }
        `}
      >
        {expand ? '-' : '+'}
      </div>
      {expand ? (
        <div
          css={css`
            ${flex.v.default};
            background: white;
            height: min-content;
            border: 2px solid grey;
            border-bottom-left-radius: 8px;
            border-bottom-right-radius: 8px;
            padding: 16px;
          `}
        >
          {/* position,time */}
          <div css={flex.v.default}>
            <div css={biggerTextCss}>{job.position}</div>
          </div>
          {/* tech tags, desc */}
          <div>
            {job.project.map((p, i) => (
              <div
                key={i}
                css={css`
                  border-top: 1px solid #adadad;
                  margin-top: 16px;
                  padding-top: 16px;
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
                  <div>{p.stuff}</div>
                ) : (
                  <ul>
                    {p.stuff.map(s => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                )}
                <div css={labelCss}>tech stack</div>
                <div
                  css={css`
                    ${flex.wrap.default};
                    gap: 8px;
                  `}
                >
                  {p.techStack.map((tag, index) => (
                    <div
                      css={css`
                        background: ${palettes[index % palettes.length]}22;

                        font-size: 16px;
                        line-height: 22px;
                        border-bottom: 3px solid ${palettes[index % palettes.length]};
                        padding: 4px 8px;
                        border-radius: 10px;
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
  margin-bottom: 4px;
  margin-top: 24px;
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

const biggerTextCss = css`
  font-size: 24px;
  font-weight: 700;
`

const barTextCss = css`
  font-size: 24px;
  font-weight: 700;
`

export default JobCard
