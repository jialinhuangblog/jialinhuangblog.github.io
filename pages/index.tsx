/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <div
      css={css`
        background: #eaeaea;
      `}
    >
      <p>Hello World. latest nextjs and react, we are using typescript</p>
      <Button variant="outlined">click me</Button>
      <p>using emotion to decorate</p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
}
