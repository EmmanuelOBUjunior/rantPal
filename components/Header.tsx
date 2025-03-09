"use client";

import Link from "next/link";

type HeaderType = {
  showNewChatButton?: boolean;
  onNewChat?: () => void;
};

const Header = ({ showNewChatButton = false, onNewChat }: HeaderType) => {
  return (
    <header className="bg-white dark:bg-gray-800 p-4 text-gray-900 dark:text-white flex justify-between items-center shadow-sm transition-colors duration-200">
      <Link
        href="/"
        className="text-xl font-bold text-purple-600 dark:text-purple-400"
      >
        RantPal
      </Link>
      <div className="flex- items-center space-x-3">
        <div className="text-sm bg-purple-600 dark:bg-purple-500 px-3 py-1 rounded-full text-white">
          Therapy Mode
        </div>
      </div>
    </header>
  );
};

export default Header;
