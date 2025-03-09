import { Message } from "@/providers/ChatContext"

type ChatMessageType={
    message: Message
}

const ChatMessage = ({message}: ChatMessageType) => {
  return (
    <div className={`flex ${message.sender === 'user'? 'justify-end': 'justify-start'}`}>
        <div className = {`max-w-[80%] rounded-lg p-4 ${message.sender === 'user'? 'bg-purple-600 text-white dark:bg-purple-500': 'dark:bg-gray-700 bg-gray-200 text-gray-900 dark:text-white'} transition-colors duration-200`}>
            {message.content}
        </div>
    </div>
  )
}

export default ChatMessage