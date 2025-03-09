'use client'

type HeaderType = {
    showNewChatButton?: boolean,
    onNewChat?: ()=> void;
}

const Header = ({showNewChatButton = false, onNewChat}: HeaderType) => {
  return (
    <header className="bg-white dark:bg-gray-800 p-4 text-gray-900 dark:text-white flex justify-between intems-center shadow-sm transition-colors duration-200">

    </header>
  )
}

export default Header