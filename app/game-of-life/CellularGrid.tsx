'use client'
import { flex, jc } from '@/modules/styling/flex'
import { css } from '@emotion/react'
import React, { useState, useEffect, memo, useCallback } from 'react'

export const CellularGrid = memo<ReactProps>(function JobCardList(props) {
  const [generation, setGeneration] = useState(0)

  const [speed, setSpeed] = useState(0)
  const [rowsCols, setRowsCols] = useState<[number, number]>([20, 20])
  const [gridFull, setGridFull] = useState(
    Array(70)
      .fill(0)
      .map(() => Array(50).fill(false)),
  )
  const [intervalID, setIntervalID] = useState<number | NodeJS.Timeout | null>()

  const fast = () => {
    setSpeed(s => (s <= 50 ? s : s - 50))
    playButton()
  }

  const slow = () => {
    setSpeed(s => s + 50)
    playButton()
  }

  const emptyGrid = useCallback(() => {
    const newGridFull = Array(rowsCols[0])
      .fill(0)
      .map(() => Array(rowsCols[1]).fill(false))
    setGridFull(newGridFull)
  }, [rowsCols])

  const pauseButton = useCallback(() => {
    if (intervalID) clearInterval(intervalID)
    setIntervalID(null)
  }, [intervalID])

  const clear = useCallback(() => {
    if (intervalID) clearInterval(intervalID)
    emptyGrid()
    pauseButton()
    setGeneration(0)
  }, [intervalID, emptyGrid, pauseButton])

  const play = useCallback(() => {
    const g = gridFull
    const g2 = [...gridFull]
    // Game of Life logic

    for (let i = 0; i < rowsCols[0]; i += 1) {
      for (let j = 0; j < rowsCols[1]; j += 1) {
        let count = 0
        // logic sequence: 2, 1, 3
        if (i > 0) if (g[i - 1][j]) count += 1
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count += 1
        if (i > 0 && j < rowsCols[1] - 1) if (g[i - 1][j + 1]) count += 1
        // logic sequence: 4, 6
        if (j < rowsCols[1] - 1) if (g[i][j + 1]) count += 1
        if (j > 0) if (g[i][j - 1]) count += 1
        // logic sequence: 8, 7, 9
        if (i < rowsCols[0] - 1) if (g[i + 1][j]) count += 1
        if (i < rowsCols[0] - 1 && j > 0) if (g[i + 1][j - 1]) count += 1
        if (i < rowsCols[0] - 1 && j < rowsCols[1] - 1) if (g[i + 1][j + 1]) count += 1
        //   change g2
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false
        // we dont take the condition that count === 2 to our judgement,
        // cause that result in infinite changing and no stable pattern.
        if (!g[i][j] && count === 3) g2[i][j] = true
      }
    }
    console.log('new...')
    // X setGeneration(generation + 1)
    setGeneration(s => s + 1)

    setGridFull(g2)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [generation, gridFull])

  const playButton = useCallback(() => {
    if (gridFull.flat().some(g => g)) {
      if (intervalID) clearInterval(intervalID)
      const newIntervalId = setInterval(play, speed)
      setIntervalID(newIntervalId)
      play()
    }
  }, [gridFull, intervalID, play, speed])

  const seed = useCallback(() => {
    pauseButton()
    clear()
    const newGridFull = [...gridFull]
    for (let i = 0; i < rowsCols[0]; i++) {
      for (let j = 0; j < rowsCols[1]; j++) {
        newGridFull[i][j] = false
        if (Math.floor(Math.random() * 4) === 1) {
          newGridFull[i][j] = true
        }
      }
    }
    setGridFull(newGridFull)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clear, rowsCols])

  const toggleGrid = (row: number, col: number) => {
    const newGridFull = [...gridFull]
    newGridFull[row][col] = !newGridFull[row][col]
    setGridFull(newGridFull)
  }

  useEffect(() => {
    seed()
    // playButton()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const rowsArr = []
  for (let i = 0; i < rowsCols[0]; i += 1) {
    for (let j = 0; j < rowsCols[1]; j += 1) {
      const boxID = `${i}-${j}`
      rowsArr.push(
        gridFull[i] ? (
          <div
            id={boxID}
            key={boxID}
            css={css`
              display: inline-block;
              border: 0.2px #fff solid;
              width: 15px;
              height: 15px;
              margin-left: -1px;
              margin-bottom: -1px;
              font-size: 6px;
              background: ${gridFull[i][j] ? '#dcdc24' : 'transparent'};
            `}
            onClick={() => toggleGrid(i, j)}
          >
            {/* {`${i} ${j}`} */}
          </div>
        ) : null,
      )
    }
  }

  return (
    <div
      css={css`
        background: #403941;
        height: 100vh;
        ${flex.v.crossCenter};
        gap: 16px;
        padding: 32px;
        p {
          color: white;
        }
      `}
    >
      <div
        css={css`
          ${flex.v.allCenter};
          font-size: 20px;
        `}
      >
        <p>Game of Life</p>
        <p>Generations: {generation}</p>
        <p>Speed: {speed}ms</p>
      </div>
      <div
        css={css`
          ${flex.h.allCenter};
          gap: 4px;
          button {
            width: 40px;
            height: 40px;
            font-size: 20px;
          }
        `}
      >
        <button
          disabled={!gridFull.flat().some(g => g)}
          onClick={() => {
            if (intervalID) pauseButton()
            else playButton()
          }}
        >
          {intervalID ? '⏸️' : '▶︎'}
        </button>
        <button
          disabled={!gridFull.flat().some(g => g)}
          onClick={fast}
        >
          🔺
        </button>
        <button
          disabled={!gridFull.flat().some(g => g)}
          onClick={slow}
        >
          🔻
        </button>
        <button onClick={clear}>🚫</button>
        <button onClick={seed}>🌱</button>
      </div>
      <div
        css={css`
          ${flex.h.allCenter};
          button {
            width: 80px;
          }
        `}
      >
        <button
          onClick={() => {
            setRowsCols([10, 20])
            clear()
            seed()
          }}
        >
          10 x 20
        </button>

        <button
          onClick={() => {
            setRowsCols([10, 10])
            clear()
            seed()
          }}
        >
          10 x 10
        </button>

        <button
          css={css`
            @media (max-width: 600px) {
              display: none;
            }
          `}
          onClick={() => {
            setRowsCols([20, 40])
            clear()
            seed()
          }}
        >
          20 x 40
        </button>
      </div>
      <div
        css={css`
          display: grid;
          ${jc.center}
          grid-template-columns: repeat(${rowsCols[1]}, 16px);
          grid-template-rows: repeat(${rowsCols[0]}, 16px);
          @media (max-width: 600px) {
          }
        `}
      >
        {rowsArr}
      </div>
    </div>
  )
})
