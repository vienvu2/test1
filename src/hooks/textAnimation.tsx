import { useEffect, useState } from 'react'

export const useTextAnimation = (text: string) => {
  const [str, setStr] = useState(text)
  useEffect(() => {
    var timer = setInterval(() => {
      setStr(text)
    }, 1000)
    return clearInterval(timer)
  }, [])
  return [str]
}
