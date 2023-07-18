import './globals.css'

import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { CounterProvider } from './context/ContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ユーザの一覧のページ',
  description: 'JSON PlaceHolderから取得したユーザ一覧です',
}

const RootLayout = ({
  analytics,
  children,
  team,
}: {
  analytics: ReactNode
  children: ReactNode
  team: ReactNode
}) => (
  <html lang="en">
    <body className={inter.className}>
      <CounterProvider>
        <div>{children}</div>
      </CounterProvider>
      <div>{team}</div>
      <div>{analytics}</div>
    </body>
  </html>
)

export default RootLayout
