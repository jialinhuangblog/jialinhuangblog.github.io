'use client'
import { css } from '@emotion/react'
import dayjs from 'dayjs'
import { memo, useEffect, useState } from 'react'
import Link from 'next/link'
import { flex } from '@/modules/styling/flex'

const MiscLinkList = memo(function MiscLinkList(props) {
  const [dt, setDt] = useState(dayjs())
  useEffect(() => {
    const interval = setInterval(() => {
      setDt(dayjs())
    }, 1000)

    return () => clearInterval(interval)
  }, [dt])

  return (
    <div
      css={css`
        margin: 0 auto;
        ${flex.v.default};
        gap: 16px;
        padding: 16px;
        a,
        * {
          &,
          &:visited {
            color: white;
          }
        }
      `}
    >
      <h1>Sparkling</h1>
      {ITEMS.map(item => (
        <Link
          key={item.title}
          href={item.link}
        >
          {item.title}
        </Link>
      ))}
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
]

export default MiscLinkList
