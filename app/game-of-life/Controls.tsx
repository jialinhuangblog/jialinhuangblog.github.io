import { memo } from 'react'

const Contrtols = memo<
  ReactProps<{
    playButton: () => void
    pauseButton: () => void
    slow: () => void
    fast: () => void
    clear: () => void
    seed: () => void
  }>
>(function Contrtols(props) {
  return (
    <div>
      <button onClick={props.playButton}>Play</button>
      <button onClick={props.pauseButton}>Pause</button>
      <button onClick={props.fast}>Fast</button>
      <button onClick={props.slow}>Slow</button>
      <button onClick={props.clear}>Clear</button>
      <button onClick={props.seed}>Sow it</button>

      {/* eventKey={1} */}
      <button onClick={props.seed}>20 X 10</button>

      <button onClick={props.seed}>50 X 30</button>

      <button onClick={props.seed}>70 X 50</button>
    </div>
  )
})

export default Contrtols
