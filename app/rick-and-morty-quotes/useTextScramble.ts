import { useRef, useEffect, MutableRefObject } from 'react'

const useTextScramble = (phrases: string[], interval?: number) => {
  const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null)
  const fxRef = useRef<{ setText: Function; frameRequest: number }>()
  const counterRef = useRef(0)

  useEffect(() => {
    if (elRef.current) {
      fxRef.current = createTextScramble(elRef?.current)
    }

    const next = () => {
      fxRef?.current?.setText(phrases[counterRef.current]).then(() => {
        setTimeout(next, interval)
      })
      counterRef.current = (counterRef.current + 1) % phrases.length
    }

    next()

    return () => {
      if (fxRef.current) cancelAnimationFrame(fxRef.current.frameRequest)
    }
  }, [phrases, interval])

  return elRef
}

const createTextScramble = (el: HTMLDivElement) => {
  let chars = '!<>-_\\/[]{}—=+*^?#________'
  let frame = 0
  let frameRequest: number = 0
  let queue: { from: string; to: string; start: number; end: number; char?: string }[] = []
  let resolve: Function

  const update = () => {
    let output = ''
    let complete = 0
    for (let i = 0, n = queue.length; i < n; i++) {
      let { from, to, start, end, char } = queue[i]
      if (frame >= end) {
        complete++
        output += to
      } else if (frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = randomChar()
          queue[i].char = char
        }
        output += `${char}`
      } else {
        output += from
      }
    }
    el.innerHTML = output
    if (complete === queue.length) {
      resolve()
    } else {
      frameRequest = requestAnimationFrame(update)
      frame++
    }
  }

  const setText = (newText: string) => {
    const oldText = el.innerText
    const length = newText.length
    const promise = new Promise((res, rej) => (resolve = res))
    queue = []
    for (let i = 0; i < length; i++) {
      const fromContent = oldText[i] || ''
      const toContent = newText[i] || ''
      const start = Math.floor(Math.random() * 20)
      const end = start + Math.floor(Math.random() * 20)
      queue.push({ from: fromContent, to: toContent, start, end })
    }
    cancelAnimationFrame(frameRequest)
    frame = 0
    update()
    return promise
  }

  const randomChar = () => chars[Math.floor(Math.random() * chars.length)]

  return { setText, frameRequest }
}
export default useTextScramble
