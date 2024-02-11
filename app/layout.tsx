import { css } from '@emotion/react'
import type { Metadata } from 'next'
import { Merriweather } from 'next/font/google'
import '@/app/global.css'
const merriweather = Merriweather({
  subsets: [],
  weight: ['300', '400', '700'],
})

export const metadata: Metadata = {
  title: "jia0's",
  description: 'my page',
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
