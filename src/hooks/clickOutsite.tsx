import React, { useRef, useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
const useOutside = (ref: any, cb: Function) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: Event) {
      if (ref.current && !ref.current.contains(event.target)) {
        // alert('You clicked outside of me!')
        cb()
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [ref])
}

export default useOutside
