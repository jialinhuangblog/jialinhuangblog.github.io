'use client'
import { css } from '@emotion/react'
import { memo } from 'react'
import Link from 'next/link'
import { flex } from '@/modules/styling/flex'
import { Metadata } from 'next'

const colors = ['#9f58e0', '#17b3fb', '#f48f27', '#fc44b2', '#dcdc24', '#1aea9d', '#e0e0e0']
export const metadata: Metadata = {
  title: 'References/Inspirations',
  description: '',
}
const MiscLinkList = memo(function MiscLinkList(props) {
  return (
    <div
      css={css`
        margin: 0 auto;
        background: repeating-conic-gradient(#1a1a1a 0 0.0001%, #7f7f7f 0 0.0002%) 50% 50%/2500px
          2500px;
        animation: b 0.1s infinite alternate;
        @keyframes b {
          100% {
            background-position: 9% 49%, 50% 50%;
          }
        }
        height: 100vh;
        width: 100vw;
        padding: 16px;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 16px;
        @media (max-width: 600px) {
          ${flex.v.default}
        }
      `}
    >
      <div
        css={css`
          grid-column: 2;
        `}
      >
        <h1
          css={css`
            color: #cecece;
            margin-top: 24px;
            margin-bottom: 24px;
          `}
        >
          Sparkling
        </h1>
        <div
          css={css`
            ${flex.v.default};
            gap: 16px;
          `}
        >
          {ITEMS.map((item, idx) => (
            <Link
              css={css`
                padding: 4px;
                border-radius: 2px;
                &,
                &:visited {
                  color: ${colors[idx % colors.length]};
                }
                &:hover,
                &:active {
                  background: ${colors[idx % colors.length]}88;
                  color: #19201e;
                }
                transition: background 300ms;
              `}
              key={item.title}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
})

const ITEMS: { title: string; link: string }[] = [
  {
    title: '225 Trendy Color Palette #2018',
    link: 'https://www.behance.net/gallery/61547749/225-Trendy-Color-Palette-2018?tracking_source=search_projects%7Cwindows+98+palette+color&l=3',
  },
  {
    title: 'blog.izs.me',
    link: 'https://blog.izs.me',
  },
  {
    title: 'young post',
    link: 'https://www.scmp.com/yp/',
  },
  {
    title: '尼采｜能夠在記憶與忘卻之間自由轉換者，才是真正健康的精神',
    link: 'https://www.hk01.com/%E5%93%B2%E5%AD%B8/647892/%E5%B0%BC%E9%87%87-%E8%83%BD%E5%A4%A0%E5%9C%A8%E8%A8%98%E6%86%B6%E8%88%87%E5%BF%98%E5%8D%BB%E4%B9%8B%E9%96%93%E8%87%AA%E7%94%B1%E8%BD%89%E6%8F%9B%E8%80%85-%E6%89%8D%E6%98%AF%E7%9C%9F%E6%AD%A3%E5%81%A5%E5%BA%B7%E7%9A%84%E7%B2%BE%E7%A5%9E?utm_source=pocket_saves',
  },

  {
    title: 'Old TV noise effect',
    link: 'https://codepen.io/t_afif/pen/oNdKYge',
  },
  { title: 'musicforprogramming.net', link: 'https://musicforprogramming.net/' },
  { title: 'Text Scramble Effect', link: 'https://codepen.io/soulwire/pen/mEMPrK' },
  {
    title: 'Poliwag: Hypnosis',
    link: 'https://www.deviantart.com/ultragriffy/art/Poliwag-Hypnosis-386070700',
  },
]

export default MiscLinkList
