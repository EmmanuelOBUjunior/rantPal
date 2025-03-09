'use client'

type HeaderType = {
    showNewChatButton?: boolean,
    onNewChat?: ()=> void;
}

const Header = ({showNewChatButton = false, onNewChat}: HeaderType) => {
  return (
    <header>Header</header>
  )
}

export default Header