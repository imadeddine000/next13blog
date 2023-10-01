import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='p-4 top-0 flex bg-white space-x-10 border-b-2 font-bold sticky w-full '>
        <h1 className='text-zinc-600' >
          Next 13 blog
        </h1>
        <div className='space-x-4 font-medium text-gray-400'>
        <Link href={'/'}>
            Home
        </Link>
        <Link href={'/addblog'}>
            Addblog
        </Link>
        </div>
    </div>
  )
}

export default Navbar