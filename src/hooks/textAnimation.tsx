import { useEffect, useState } from 'react'

export const useTextAnimation = (text: string) => {
  const _text = `<${text}>`
  const length = _text.length
  const positionList: number[] = []
  for (let i = 0; i < 30; i++) {
    positionList.push(length)
  }

  for (let i = 0; i < length; i++) {
    positionList.push(length - i)
  }
  for (let i = 0; i < length; i++) {
    positionList.push(i)
  }
  for (let i = 0; i < 30; i++) {
    positionList.push(length)
  }
  const [position, setPosition] = useState(0)

  useEffect(() => {
    var timer = setInterval(() => {
      setPosition((r) => (r > positionList.length ? 0 : r + 1))
    }, 30)
    return () => clearInterval(timer)
  }, [])

  return [`${_text.slice(0, positionList[position])}_`]
}
