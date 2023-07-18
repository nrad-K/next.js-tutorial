'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react'

const CounterContext = createContext<
  { count: number; setCount: Dispatch<SetStateAction<number>> } | undefined
>(undefined)

export const CounterProvider = ({ children }: { children: ReactNode }) => {
  const [count, setCount] = useState<number>(0)
  const counterProviderValue = useMemo(
    () => ({ count, setCount }),
    [count, setCount]
  )

  return (
    <CounterContext.Provider value={counterProviderValue}>
      {children}
    </CounterContext.Provider>
  )
}

export const useCounter = () => {
  const context = useContext(CounterContext)
  if (context === undefined) {
    throw new Error('useCounter must be used within a CounterProvider')
  }
  return context
}
