import React, { memo } from 'react'
import { css } from '@emotion/react'
import Link from 'next/link'

export const AppLink = memo<
  ReactProps<{ href: string; target?: '_blank' | '_self' | '_parent' | '_top' }>
>(function AppLink(props) {
  const hrefAs = props.href

  return (
    <>
      {props.href ? (
        <Link
          href={props.href}
          as={hrefAs}
        >
          <a
            className={props.className}
            css={css`
              text-decoration: none;
              &,
              &:hover,
              &:active,
              &:visited {
                color: inherit;
              }
              height: fit-content;
            `}
            href={hrefAs || props.href}
            target={props.target}
            rel={props.target === '_blank' ? 'noopener noreferrer' : ''}
          >
            {props.children}
          </a>
        </Link>
      ) : (
        <span className={props.className}>{props.children}</span>
      )}
    </>
  )
})
