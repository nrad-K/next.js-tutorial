'use client'

import React from 'react'

import { useCounter } from './context/ContextProvider'

const Counter = ({ children }: { children: React.ReactNode }) => {
  const { count, setCount } = useCounter()

  const increment = () => {
    setCount((prev) => prev + 1)
  }

  return (
    <>
      <div>Count: {count}</div>
      <button
        type="submit"
        onClick={increment}
        className="rounded-lg bg-blue-600 px-2 py-1 text-white"
      >
        Increment
      </button>
      {children}
    </>
  )
}

export default Counter
