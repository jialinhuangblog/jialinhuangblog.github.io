import { css } from '@emotion/css'
import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import '@/app/global.css'
const merriweather = Merriweather({
  subsets: [],
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: 'jialinhuang',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      css={css``}
    >
      <body className={merriweather.className}>{children}</body>
    </html>
  )
}
