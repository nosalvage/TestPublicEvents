import { useEffect, useRef } from 'react'

function useTimeout(callback, delay) {
  const timer = useRef(null);
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback])

  const startTimer = () => {
    timer.current = setTimeout(() => {
      savedCallback.current()
    }, delay)
  }
  const clearTimer = () => {
    clearTimeout(timer.current)
  }

  return {
    startTimer,
    clearTimer,
  };
}

export default useTimeout