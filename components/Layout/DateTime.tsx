import { css } from '@emotion/react'
import dayjs from 'dayjs'
import { memo, useEffect, useState } from 'react'
import useMedia from '~/modules/styling/useMedia'

const DateTime = memo<ReactProps<{ color: string }>>(function DateTime(props) {
  const [dt, setDt] = useState(dayjs())
  const { isPhone } = useMedia()
  useEffect(() => {
    const interval = setInterval(() => {
      setDt(dayjs())
    }, 1000)

    return () => clearInterval(interval)
  }, [dt])

  return (
    <div
      css={css`
        position: relative;
        color: white;
        width: auto;
        background: ${props.color};
        padding: 2px 8px;
        margin-right: 8px;
        font-size: ${isPhone ? 10 : 14}px;
        box-shadow: inset 2px 2px 2px 0 #7d7d7d, inset -2px -2px 2px 0 white;
        &:before {
          content: ' ';
          /* border: 1px solid ${props.color}; */
          /* background: #334651; */
          width: 100%;
          border-radius: 4px;
          top: -4px;
          bottom: 0px;
          left: -4px;
          position: absolute;
          z-index: -1;
        }
      `}
    >
      {dayjs().format('hh:mm A')}
      {/* {dayjs().format('YYYY MM/DD hh:mm A')} */}
    </div>
  )
})

export default DateTime
