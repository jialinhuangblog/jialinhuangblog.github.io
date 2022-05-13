/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Link from "next/link";

export default function Home() {
  return (
    <div
      css={css`
        background: #eaeaea;
      `}
    >
      <p>Hello World. latest nextjs and react, we are using typescript</p>
      <p>using emotion to decorate</p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
