'use client'
import { flex } from '@/modules/styling/flex'
import { css } from '@emotion/react'
import { memo } from 'react'

const MessageBoard = memo(function MessageBoard(props) {
  return (
    <div
      css={css`
        margin: 0 auto;
        ${flex.v.default};
        max-width: 640px;
        gap: 16px;
      `}
    >
      {ITEMS.map(item => (
        <div
          key={item.title}
          css={css`
            border: 1px solid black;
            border-radius: 8px;
          `}
        >
          <div
            css={css`
              ${flex.h.crossCenter};
              background-color: #e5caaa;
              color: black;
              height: 40px;
              border-radius: 8px 8px 0 0;
              padding: 16px;
            `}
          >
            {item.title}
          </div>
          <div
            css={css`
              background-color: #ffffff;
              border-radius: 0 0 8px 8px;
              color: black;
              height: 240px;
              padding: 16px;
            `}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  )
})

const ITEMS: { title: string; content: string }[] = [
  {
    title: 'sweetcatloveyou',
    content:
      '你知道嗎？每次看到你的照片都會讓我的心情變得超級好！你是我生活中最可愛的寶貝，我永遠都愛你！',
  },
  {
    title: 'melodycatlover',
    content:
      '親愛的貓咪，你知道嗎？你的叫聲就像一首美妙的樂曲，每次聽到都讓我感到無比的幸福和溫馨。我願意一輩子陪伴在你身邊！',
  },
  {
    title: 'braveadventurer99',
    content: '哈囉有人在家嗎',
  },
  {
    title: 'dearbookworm2021',
    content: '＝＝',
  },

  {
    title: 'dearphotographylover',
    content:
      '親愛的攝影愛好者，你的攝影作品總是讓我感受到生活的美好和深刻。我期待著和你一起探索攝影的世界，共同追逐美麗的影像！',
  },
  {
    title: 'sweetcatloveyou23',
    content:
      '你知道嗎？每次看到你的照片都會讓我的心情變得超級好！你是我生活中最可愛的寶貝，我永遠都愛你！',
  },
  {
    title: 'melodycatlover0098',
    content:
      '親愛的貓咪，你知道嗎？你的叫聲就像一首美妙的樂曲，每次聽到都讓我感到無比的幸福和溫馨。我願意一輩子陪伴在你身邊！',
  },
  {
    title: 'bdventurer5566',
    content: '哈囉有人在家嗎',
  },
  {
    title: 'dearbookworm1998',
    content: '＝＝',
  },

  {
    title: 'cj278872',
    content:
      '親愛的攝影愛好者，你的攝影作品總是讓我感受到生活的美好和深刻。我期待著和你一起探索攝影的世界，共同追逐美麗的影像！',
  },
]

export default MessageBoard
