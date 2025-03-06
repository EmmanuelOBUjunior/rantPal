import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='flex flex-col h-screen bg-gray-900'>
        {/* Header */}
        <header className = "bg-gray-800 p-4 text-white flex justify-between  items-center">
        <Link href="/" className="text-xl font-bold text-purple-400">RantPal</Link>
        <div className= "text-sm bg-purple-600 px-3 py-1 rounded-full">Therapy Mode</div>
        </header>
    </div>
  )
}

export default page