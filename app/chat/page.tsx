import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col h-screen bg-gray-900'>
        {/* Header */}
        <header className = "bg-gray-800 p-4 text-white flex justify-between  items-center">
        <Link href="/">RantPal</Link>
        </header>
    </div>
  )
}

export default page