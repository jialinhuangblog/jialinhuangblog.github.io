'use client'
import { css } from '@emotion/react'
import { memo, useEffect, useRef, useState } from 'react'
import { flex } from '@/modules/styling/flex'
import NEWS_DATA from '@/app/css-decode/horizontal-slider/newsdata'
import NewsCard from './NewsCard'
import Link from 'next/link'

const colors = ['#9f58e0', '#17b3fb', '#f48f27', '#fc44b2', '#dcdc24', '#1aea9d', '#e0e0e0']

const CardsSlider = memo<ReactProps>(function CardsSlider(props) {
  const scrollHorizontalNode = useRef<HTMLDivElement>(null)
  const containerNode = useRef<HTMLDivElement>(null)
  const [beSticky, setBeSticky] = useState(false)
  const [containerPercentage, setContainerPercentage] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      //window
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const scrollHeight = document.body.scrollHeight
      const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100
      setContainerPercentage(scrollPercentage)
      //card list
      const target = scrollHorizontalNode.current
      const containerTarget = containerNode.current

      // control cards horizontal scrolling when we scroll down
      if (target) {
        const maxPercentage =
          ((target.scrollWidth - target.offsetHeight) / target.scrollWidth) * 100
        target.style.transform = `translateX(-${Math.min(maxPercentage, scrollPercentage)}%)`
      }

      // since sticky doesn't work, use this to let its position to be fixed temporarily
      if (containerTarget) {
        console.log(containerTarget?.offsetTop < scrollTop)
        setBeSticky(containerTarget?.offsetTop < scrollTop)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div css={css``}>
      <div
        css={css`
          height: 100vh;
          background: black;
          color: white;
          ${flex.h.allCenter};
        `}
      >
        Just Simply Scroll Down
      </div>
      <div
        ref={containerNode}
        css={css`
          width: 100vw;
          /* super high */
          height: 800vh;
          overflow-y: auto;
          background-color: #1a1a1a;
          position: relative;
        `}
      >
        <div
          css={css`
            background-color: #1a1a1a;
            width: min-content;
            overflow-y: hidden;
            position: ${beSticky ? 'fixed' : 'relative'};
            top: 0;
            padding: 32px;
            @media (max-width: 900px) {
              padding: 16px;
            }
          `}
        >
          <p
            css={css`
              font-size: 22px;
              color: white;
              width: 80vw;
              @media (max-width: 900px) {
                font-size: 16px;
              }
            `}
          >
            Vertical Scroll, Horizontal Control
          </p>
          {/* card container */}
          <div
            ref={scrollHorizontalNode}
            css={flex.h.default}
          >
            {NEWS_DATA.map((news, index) => {
              return (
                <NewsCard
                  key={index}
                  datum={news}
                  color={colors[index % colors.length]}
                />
              )
            })}
          </div>
        </div>
      </div>
      <div
        css={css`
          height: 100vh;
          background: #fcff79;
          color: #1a1a1a;
          ${flex.v.allCenter};
        `}
      >
        <p>
          Inspired by <Link href='https://atelier.lapresse.ca/'>here</Link>
        </p>
        <p>
          Data borrowed from <Link href='https://scmp.com/'>scmp.com</Link>
        </p>
      </div>
    </div>
  )
})

export default CardsSlider
