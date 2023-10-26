import { NextPage } from 'next'
import { css } from '@emotion/react'
import { flex } from '~/modules/styling/flex'
import { AppLink } from '~/components/AppLink'
import Layout from '~/components/Layout'
import useMedia from '~/modules/styling/useMedia'
import palettes from '~/modules/styling/palettes'

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
    name: 'jwasham/coding-interview-university',
  },
  { href: 'https://medium.com/better-programming', name: 'Better Programming' },
  { href: 'https://medium.com/better-programming', name: 'Better Programming' },
]

const Bookmark: NextPage = () => {
  const { isPc } = useMedia()
  return (
    <Layout>
      <div
        css={css`
          ${flex.wrap.allCenter};
          align-content: ${isPc ? 'center' : 'initial'};
          height: 100%;
          margin: 0 auto;
          padding: 64px 16px;
          gap: 16px;
        `}
      >
        {' '}
        a test
        {/* {bookmarks.concat(bookmarks).map((bookmark, index) => (
          <AppLink
            css={linkCss}
            key={index}
            href={bookmark.href}
            target='_blank'
          >
            <p
              css={css`
                background: ${palettes[index % palettes.length]}22;
                ${linkCss};
                margin: 0;
                border-bottom: 3px solid ${palettes[index % palettes.length]};
                padding: 4px 8px;
                border-radius: 10px;
              `}
            >
              {bookmark.name}
            </p>
          </AppLink>
        ))} */}
      </div>
    </Layout>
  )
}
export default Bookmark
