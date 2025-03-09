'use client'

type HeaderType = {
    showNewChatButton?: boolean,
    onNewChat?: ()=> void;
}

const Header = ({showNewChatButton = false, onNewChat}: HeaderType) => {
  return (
    <div>Header</div>
  )
}

export default Header