'use client'
import { css } from '@emotion/react'
import { memo, useEffect, useRef, useState } from 'react'
import { flex } from '@/modules/styling/flex'

const colors = ['#9f58e0', '#17b3fb', '#f48f27', '#fc44b2', '#dcdc24', '#1aea9d', '#e0e0e0']

const SlidingGrids = memo<ReactProps>(function SlidingGrids() {
  const containerNode = useRef<HTMLDivElement>(null)
  const [beSticky, setBeSticky] = useState(false)
  const [containerPercentage, setContainerPercentage] = useState(0)
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const windowHeight = window.innerHeight
      const containerTarget = containerNode.current
      const scrollHeight = document.body.scrollHeight

      const scrollPercentage = (scrollTop / (scrollHeight - windowHeight)) * 100
      setContainerPercentage(scrollPercentage)
      if (containerTarget) {
        const containerOffsetTop = containerTarget?.offsetTop
        setBeSticky(scrollTop > containerOffsetTop)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      css={css`
        background: #1a1a1a;
      `}
    >
      <div
        css={css`
          width: 100vw;
          ${flex.h.allCenter}
          color: white;
          position: fixed;
          top: 0;
          font-size: 28px;
          margin: 16px 0;
          @media (max-width: 600px) {
            font-size: 16px;
          }
        `}
      >
        Vertical Sliding Windows
      </div>
      <div
        ref={containerNode}
        css={css`
          width: 100%;
          height: 1200vh;
          ${flex.h.mainCenter};
        `}
      >
        <div
          className='grids-group'
          css={css`
            height: 50vh;
            overflow: hidden;
            position: ${beSticky ? 'fixed' : 'relative'};
            top: 25vh;
            aspect-ratio: 1;
          `}
        >
          <div
            css={css`
              ${gridCss}
              border: 3px solid ${colors[0]};
              background-color: ${colors[0]};
              top: 0;
            `}
          >
            1
          </div>
          {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <div
              key={num}
              css={css`
                ${gridCss}
                border: 3px solid ${colors[num % colors.length]};
                background-color: ${colors[num % colors.length]};
                transform: translateY(${Math.max(num * 50 - containerPercentage * 5, 0)}vh);
              `}
            >
              {num}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
})

const gridCss = css`
  height: 50vh;
  width: 100%;
  position: absolute;
  z-index: 1;
  color: white;
  ${flex.h.allCenter};
  font-size: 32px;
`

export default SlidingGrids
