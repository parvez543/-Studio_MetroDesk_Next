import { Inter } from 'next/font/google'
import HomePage from './HomePage/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
        <HomePage/>
    </main>
  )
}
