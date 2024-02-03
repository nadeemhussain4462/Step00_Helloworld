"use client"
import { createContext, useState } from 'react';
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const CountContext = createContext(0);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [count, setCount] = useState(0)
  return (
    <html lang="en">
      <body className={inter.className}>

      <CountContext.Provider value={0}>

        {children} 
        </CountContext.Provider>
        </body>
    </html>
  )
}
