import { css } from "@emotion/react";
import { NextPage } from "next";
import { Avatar, IconButton, Paper } from "@mui/material";
import { globalGrey, globalOrange } from "~/modules/styling/colors";
import { flex } from "~/modules/styling/flex";
import useMedia from "~/modules/styling/useMedia";
import { RiLinkedinBoxFill, RiGithubFill, RiStackFill } from "react-icons/ri";

const descriptionCss = css`
  font-size: 16px;
  line-height: 22px;
`;
const keyCss = css`
  font-weight: 600;
  margin-top: 24px;
`;

const valueCss = css`
  font-weight: 400;
`;
const Home: NextPage = () => {
  const { isPc } = useMedia();
  return (
    <div
      css={css`
        ${flex.h.allCenter};
        height: 100%;
        background: ${isPc ? globalGrey.g100 : "white"};
      `}
    >
      <Paper
        elevation={isPc ? 3 : 0}
        css={css`
          height: 560px;
          width: 320px;
          border-radius: 4px;
          position: relative;
          padding: 16px 32px;
          margin: 40px auto;
          font-family: "Fira Sans", sans-serif;
          user-select: none;
        `}
      >
        <div
          css={css`
            position: absolute;
            width: 100%;
            height: 24px;
            left: 0;
            top: 0;
            background: ${globalOrange.o600};
            border-radius: 4px 4px 0 0;
          `}
        />
        <div
          css={css`
            ${flex.h.crossCenter};
            gap: 8px;
          `}
        >
          <Avatar
            sx={{ width: 56, height: 56 }}
            src="https://lh3.googleusercontent.com/a-/AOh14GgT_31zBJDEEvfcpZc3v9I_8B7c_EHn1sXKJAY6Hw=s96-c"
          />
          <p
            css={css`
              margin: 0;
              font-size: 24px;
            `}
          >
            jialin.huang
          </p>
        </div>
        <p css={descriptionCss}>
          Around 4 years of web development experience, mostly doing frontend
          and big fan of Golang
        </p>
        <p css={keyCss}>Location</p>
        <p css={valueCss}>Taipei</p>
        <p css={keyCss}>Work</p>
        <p css={valueCss}>SCMP, Futuresai</p>
        <p css={keyCss}>MBTI</p>
        <p css={valueCss}>INTJ</p>
        <p css={keyCss}>Contact</p>
        <div css={flex.h.crossCenter}>
          <IconButton
            href="https://www.linkedin.com/in/jlhuangprogramming/"
            color="primary"
            size="large"
          >
            <RiLinkedinBoxFill />
          </IconButton>
          <IconButton
            href="https://github.com/jialinhuang00"
            color="default"
            size="large"
          >
            <RiGithubFill />
          </IconButton>
          <IconButton
            href="./angular-chunk-versatile"
            color="error"
            size="large"
          >
            <RiStackFill />
          </IconButton>
        </div>
      </Paper>
    </div>
  );
};

export default Home;
