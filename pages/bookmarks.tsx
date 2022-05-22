import { NextPage } from 'next'
import { css } from '@emotion/react'
import { flex } from '~/modules/styling/flex'
import { AppLink } from '~/components/AppLink'
import Layout from '~/components/Layout'

const linkCss = css`
  font-size: 16px;
  line-height: 22px;
`

const bookmarks: { href: string; name: string }[] = [
  { href: 'https://pointerpointer.com/', name: 'Pointer Pointer' },
  { href: 'https://musicforprogramming.net/', name: 'musicForProgramming();' },
  { href: 'https://nipponcolors.com/', name: '日本の伝統色' },
  { href: 'https://color.hailpixel.com/', name: 'Colordot' },
  { href: 'https://colordesigner.io', name: 'Color Designer' },
  { href: 'https://www.theminimalists.com/', name: 'The Minimalists' },
  { href: 'https://www.epochconverter.com/', name: 'Epoch Converter' },
  { href: 'https://jisho.org/', name: 'Jisho.org: Japanese Dictionary' },
  { href: 'https://kotobank.jp/', name: 'コトバンク' },
  { href: 'https://aprogrammerlife.com/', name: 'www.aprogrammerlife.com' },
  { href: 'https://cmdchallenge.com/', name: 'Command Challenge!' },
  { href: 'https://www.30secondsofcode.org/', name: '30 seconds of code' },
  {
    href: 'https://genius.com/artists/Sam-altman',
    name: 'Sam Altman Lyrics, Songs, and Albums | Genius',
  },
  {
    href: 'https://www.freecodecamp.org/news/how-to-create-3d-and-2d-graphics-with-opengl-and-cpp/',
    name: 'How to Create 3D and 2D Graphics with OpenGL and C++',
  },
  { href: 'https://jensimmons.com/', name: 'jensimmons' },
  { href: 'http://rexytseng.com/', name: 'Rexy Tseng 曾慶強' },
  {
    href: 'https://github.com/jwasham/coding-interview-university',
    name: 'Coding Interview University',
  },
]

const palettes = [
  '#5C4B51',
  '#F3EAE5',
  '#FF6A67',
  '#E85EFF',
  '#E87151',
  '#EDC7CB',
  '#8CBEB2',
  '#CD96B3',
  '#FF9C59',
  '#E851AC',
  '#F2EBBF',
  '#756967',
  '#7F93A2',
  '#F3B562',
  '#F06060',
]
const Bookmark: NextPage = () => {
  return (
    <Layout>
      <div
        css={css`
          ${flex.wrap.allCenter};
          align-content: center;
          height: 100%;
          margin: 0 auto;
          overflow: auto;
          padding: 16px;
          gap: 16px;
        `}
      >
        {bookmarks.concat(bookmarks).map((bookmark, index) => (
          <AppLink
            css={linkCss}
            key={index}
            href={bookmark.href}
          >
            <p
              css={css`
                background: ${palettes[index % 15]}22;
                ${linkCss};
                margin: 0;
                border-bottom: 3px solid ${palettes[index % 15]};
                padding: 0 2px;
              `}
            >
              {bookmark.name}
            </p>
          </AppLink>
        ))}
      </div>
    </Layout>
  )
}
export default Bookmark
