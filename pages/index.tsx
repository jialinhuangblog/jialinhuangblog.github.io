import { css } from "@emotion/react";
import { NextPage } from "next";
import {
  Avatar,
  IconButton,
  Paper,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { globalOrange } from "~/modules/styling/colors";
import { flex } from "~/modules/styling/flex";
import useMedia from "~/modules/styling/useMedia";
import { RiLinkedinBoxFill, RiGithubFill, RiStackFill } from "react-icons/ri";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import { darkTheme, lightTheme } from "~/modules/styling/themes";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

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
  line-height: 22px;
`;

const toggleBtnCss = css`
  border: 0;
  border-radius: 0;
`;
const Home: NextPage = () => {
  const { isPc } = useMedia();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <Paper
        css={css`
          ${flex.h.allCenter};
          height: 100%;
        `}
      >
        <Paper
          elevation={isPc ? 3 : 0}
          css={css`
            width: 320px;
            border-radius: ${isPc ? 4 : 0}px;
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
              height: 29px;
              left: 0;
              top: 0;
              background: ${globalOrange.o600};
              border-radius: ${isPc ? 4 : 0}px ${isPc ? 4 : 0}px 0 0;
            `}
          />
          <div
            css={css`
              position: absolute;
              right: 0.5px;
              top: 2px;
            `}
          >
            <ToggleButtonGroup
              size="small"
              value={theme}
              onChange={() => {
                console.log(theme);
                setTheme(theme === "light" ? "dark" : "light");
              }}
            >
              <ToggleButton css={toggleBtnCss} value="light">
                <MdDarkMode />
              </ToggleButton>
              <ToggleButton css={toggleBtnCss} value="dark">
                <MdOutlineLightMode />
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

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
                font-size: 26px;
                font-weight: 700;
                letter-spacing: 2px;
              `}
            >
              jialin.huang
            </p>
          </div>
          <p css={descriptionCss}>
            Around 4 years of web development experience, mostly doing frontend
            and a big fan of Golang
          </p>
          <p css={keyCss}>Location</p>
          <p css={valueCss}>Taipei</p>
          <p css={keyCss}>Work</p>
          <p css={valueCss}>SCMP, Futuresai</p>
          <p css={keyCss}>MBTI</p>
          <p css={valueCss}>INTJ</p>
          <p css={keyCss}>References</p>
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
          <p css={keyCss}>Philosophy</p>
          <p css={valueCss}>
            To live is to risk it all Otherwise you're just an inert chunk of
            randomly assembled molecules drifting wherever the Universe blows
            you
          </p>
        </Paper>
      </Paper>
    </ThemeProvider>
  );
};

export default Home;
