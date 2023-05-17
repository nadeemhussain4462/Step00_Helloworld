import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let name = " Nadeem";

  return (
   <div className='bg-gray-400 text-white py-4 px-10 font-serif font-bold'>Hello world{name}</div> 
  )
}
