import { css } from '@emotion/react'
import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import Layout from '~/components/Layout'
import { activeBtnCss, defaultBtnCss, normalStateBtnCss } from '~/modules/styling/button'
import { flex } from '~/modules/styling/flex'
import useMedia from '~/modules/styling/useMedia'

const CV: NextPage = () => {
  const { isPad, isPc } = useMedia()
  const [page, setPage] = useState(0)
  const [lock, setLock] = useState(true)
  const [password, setPassword] = useState('')
  const handleUserKeyPress = useCallback(
    (e: any) => {
      if (e.keyCode >= 65 && e.keyCode <= 90 && String.fromCharCode(e.keyCode)) {
        setPassword(prev => prev + e.keyCode)
      } else {
        setPassword('')
      }

      if (password === '696969') {
        setLock(false)
      }
    },
    [password],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleUserKeyPress)
    return () => {
      window.removeEventListener('keydown', handleUserKeyPress)
    }
  }, [handleUserKeyPress])
  const containerCss = css`
    position: relative;
    ${flex.v.default};
    width: 100%;
    height: min-content;
    border-top: 4px solid white;
    border-left: 4px solid white;
    border-right: 4px solid black;
    border-bottom: 4px solid black;
    max-width: 880px;
    margin: ${isPad ? 40 : 80}px auto;
    color: #222222;
  `
  return (
    <Layout>
      <div css={containerCss}>
        <div
          // onClick={() => setExpand(prev => !prev)}
          css={css`
            cursor: pointer;
            left: 0px;
            right: 0px;
            ${flex.h.crossCenter};
            gap: 16px;
            height: 40px;
            padding: 0 8px;
            z-index: 1;
            color: white;
            border-top: 2px solid white;
            border-left: 2px solid white;
            border-right: 2px solid black;
            border-bottom: 2px solid black;
          `}
        >
          <div
            css={css`
              position: absolute;
              right: 0px;
              top: 2px;
              z-index: 1;
              width: 38px;
              height: 38px;
              ${flex.h.allCenter};
              cursor: pointer;
              border-top: 2px solid white;
              border-left: 2px solid white;
              border-right: 2px solid black;
              border-bottom: 2px solid black;
            `}
          >
            x
          </div>
        </div>

        <div
          css={css`
            ${isPc ? flex.h.default : flex.v.default};
            padding: 16px;
            height: ${isPad ? 60 : 50}vh;
          `}
        >
          <>
            <div
              css={css`
                ${isPc ? flex.v.default : flex.h.default};
                width: 120px;
              `}
            >
              {(lock ? [0] : [0, 1, 2, 3]).map(item => (
                <div
                  key={item}
                  onClick={() => setPage(item)}
                  css={css`
                    ${flex.h.allCenter};
                    ${defaultBtnCss};
                    ${page === item ? activeBtnCss : ''};
                    padding: 2px 8px;
                    border-radius: 4px;
                    gap: 4px;
                    width: 40px;
                    height: 40px;
                  `}
                >
                  {item}
                </div>
              ))}
            </div>
            <div
              css={css`
                background: white;
                ${normalStateBtnCss};

                flex: 1;
                padding: 16px;
                overflow-y: scroll;
                &::-webkit-scrollbar {
                  width: 16px;
                  background-color: #cccccc;
                }
                &::-webkit-scrollbar-thumb {
                  background-color: #999999;
                }
              `}
            >
              {lock ? (
                <p>..</p>
              ) : (
                <>
                  <div css={flex.h.default}>
                    <h6
                      css={css`
                        color: #7a7a7a;
                        margin-right: 4px;
                      `}
                    >
                      Industry /
                    </h6>

                    <h6>{PAGE_CONTNET[page].industry}</h6>
                  </div>
                  <h2
                    css={css`
                      margin: 12px 0;
                    `}
                  >
                    {PAGE_CONTNET[page].title}
                  </h2>
                  <ul
                    css={css`
                      padding-left: 16px;
                      font-size: 20px;
                      color: #6a6a6a;
                    `}
                  >
                    {PAGE_CONTNET[page].subtitle.map((item, idx) => (
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
                  {PAGE_CONTNET[page].content.map((item, idx) => (
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
              )}
            </div>
          </>
        </div>
      </div>
    </Layout>
  )
}

const PAGE_CONTNET: {
  industry: string
  title: string
  subtitle: string[]
  content: string[]
}[] = [
  {
    industry: 'Dental',
    title: 'Developing Dental Clinic Software and AI Integration',
    subtitle: [
      'Developing Dental Clinic Software and Integrating with Health Insurance',
      'Creating an AI Service for X-ray Image Analysis',
    ],
    content: [
      'I developed dental clinic software in a Windows desktop format, which integrated with the Taiwan National Health Insurance system. Some parts of the software were web-based.',
      'Collaborated with a colleague to create an AI service for X-ray image analysis using Python Flask and uWSGI, hosted on Google Cloud Platform, to detect the position of teeth in oral X-ray photos.',
    ],
  },
  {
    industry: 'Finance',
    title: 'Revamp to New React with Complex Strategy Development and Collaborative Roles',
    subtitle: [
      'Transitioning to New React: Collaborative Approach and Tools',
      'Developing Complex Strategies with TradingView and Next.js',
    ],
    content: [
      'Working with financial products at a company that focuses on futures and options. During that time, we were in the midst of transitioning from the old to the new version of React. My role involved collaborating with a partner to revamp the entire old React project.',
      'We used tools like TradingView, Next.js, and SignalR to develop complex strategies and trends that might be a bit hard for the average person to grasp. In our company, different team members played different roles – some acted like professors, always testing and experimenting with theories, while others were more like gamers, relying on their instincts to trade commodities.',
      "To visualize their ideas and make them more accessible. I aimed to help users of our company's trading software understand trends more intuitively and make rational decisions.",
    ],
  },
  {
    industry: 'Media',
    title: 'SEO Optimization, Complex Ad Analysis, and User Behavior',
    subtitle: [
      'Focusing on SEO Performance Metrics and LCP/FCP',
      'In-Depth Ad Analysis for User Behavior Insights',
    ],
    content: [
      "I'm blessed to work at one of the largest media companies in Hong Kong, and they had been impressively focused on their digital transformation for the past 20-30 years. My primary role there was to enhance the SEO performance of their website, particularly focusing on key metrics like LCP (Largest Contentful Paint) and FCP (First Contentful Paint).",
      "I also worked on optimizing the logic for Google Analytics analysis. Their ad analysis tools were the most comprehensive I've ever come across, providing multiple perspectives on user behavior.",
    ],
  },
  {
    industry: 'Gaming',
    title: 'Building a Modern Gaming Platform',
    subtitle: [
      'Developing a Gaming Platform with Modern Interfaces',
      'Enhancing User Experience with Streamlined Databases',
    ],
    content: [
      "Now, I work at a gaming company where we are in the process of developing a gaming platform. Similarly, I've been involved in handling long-standing customer projects and their iterations. Apart from designing more modern layouts, we've also taken the initiative to streamline the existing old database. This has allowed us to create a more intuitive middleware server for interaction with the frontend.",
    ],
  },
]

export default CV
