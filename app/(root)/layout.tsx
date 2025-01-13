import React from 'react'
//import music from '/music-circle.svg'
import Link from 'next/link'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='flex items-center justify-between px-5 py-5'>

        <div className="flex gap-10 items-center">
          <Link href="/" className='flex gap-2 items-center'>
            <img src={'/music-circle.svg'} className='h-12' />
            <h1 className='text-3xl font-semibold'>LyricMatch</h1>
          </Link>

          <ul className="flex gap-5 text-lg">
            <li><Link href="/">Home</Link></li>

          </ul>

        </div>


        <Link href="/dashboard" className='rounded-md bg-white font-bold text-[#1F1F1F] px-5 py-2 text-lg hover:opacity-80 transition-all duration-300 ease-in-out'>Discover</Link>

      </div>
      {children}
    </div>
  )
}

export default layout
