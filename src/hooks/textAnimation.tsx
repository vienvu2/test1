import { useEffect, useState } from 'react'

export const useTextAnimation = (texts: string[]) => {
  const [position, setPosition] = useState(0)
  const textList: string[] = []

  texts.map((text, index) => {
    const _text = `<${text}>`
    const length = _text.length

    for (let i = 0; i < length; i++) {
      textList.push(_text.slice(0, i) || '')
    }
    for (let i = 0; i < 30; i++) {
      textList.push(_text)
    }

    for (let i = 0; i < length; i++) {
      textList.push(_text.slice(0, length - i) || '')
    }
  })

  useEffect(() => {
    var timer = setInterval(() => {
      setPosition((r) => (r > textList.length - 1 ? 0 : r + 1))
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return [`${textList[position] || ''}_`]
}
