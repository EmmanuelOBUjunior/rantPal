import { Message } from "@/providers/ChatContext"

type ChatMessageType={
    message: Message
}

const ChatMessage = ({message}: ChatMessageType) => {
  return (
    <div className={`flex ${message.sender === 'user'? 'justify-end': 'justify-start'}`}>
        <div className = {`max-w-[80%] rounded-lf p-4 ${message.sender === 'user'? 'bg-purple-600 text-white': 'bg-gray-700 text-white'}`}>
            {message.content}
        </div>
    </div>
  )
}

export default ChatMessage