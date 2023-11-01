import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next.Js Build Optimization',
  description: 'Ways to optimize build in Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* import Header component*/}
        <Header />
        {children}
      </body>
    </html>
  )
}
