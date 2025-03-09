'use client'

import Link from "next/link";

type HeaderType = {
    showNewChatButton?: boolean,
    onNewChat?: ()=> void;
}

const Header = ({showNewChatButton = false, onNewChat}: HeaderType) => {
  return (
    <header className="bg-white dark:bg-gray-800 p-4 text-gray-900 dark:text-white flex justify-between items-center shadow-sm transition-colors duration-200">
        <Link href='/' className="text-xl fonst-bold text-purple-600 dark:text-purple-400">
        RantPal
        </Link>
    </header>
  )
}

export default Header