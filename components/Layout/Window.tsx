import { css } from '@emotion/react'
import { memo, useEffect, useRef } from 'react'
import { flex } from '~/modules/styling/flex'

const Window = memo<ReactProps<{ color: string }>>(function Window(props) {
  const dragRef = useRef<HTMLDivElement>(null)

  return (
    <div
      className='window-main'
      ref={dragRef}
      draggable={true}
      css={css`
        position: fixed;
        ${flex.v.default}
        height: 400px;
        width: 800px;
        border: 3px solid white;
        box-shadow: inset 0px 0px 2px 0 grey;
        background: ${props.color};
      `}
    >
      <div
        css={css`
          height: 24px;
          background: linear-gradient(to left, #fff, ${props.color} 35%);
        `}
      ></div>
      <div
        css={css`
          ${flex.h.allCenter}
          position: absolute;
          right: 0;
          height: 20px;
          width: 20px;
          margin-top: 2px;
        `}
      >
        x
      </div>
      <div
        css={css`
          flex: 1;
          background: white;
        `}
      ></div>
      {/* hello world children. */}
    </div>
  )
})

export default Window
