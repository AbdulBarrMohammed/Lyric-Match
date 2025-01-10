import React from 'react'
//import music from '/music-circle.svg'
import Link from 'next/link'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className='flex items-center justify-between px-5 py-5'>

        <div className='flex gap-2 items-center'>
          <img src={'/music-circle.svg'} className='h-12' />
          <h1 className='text-3xl font-semibold'>LyricMatch</h1>
        </div>

        <Link href="/dashboard" className='rounded-md bg-sky-500 font-bold text-white px-5 py-2 text-lg'>Discover</Link>

      </div>
      {children}
    </div>
  )
}

export default layout
