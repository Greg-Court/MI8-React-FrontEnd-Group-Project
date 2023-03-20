import React, {useState} from 'react'
import { ChatBubbleRecieve } from '../components/ChatBubbleRecieve'
import { ChatBubbleSend } from '../components/ChatBubbleSend'


export const ChatContainer = () => {
    const [messages, setMessages] = useState()



    return (
    <div className="bg-blue-500 w-1/2 p-3">
        <ChatBubbleSend/>
        <ChatBubbleRecieve/>
        <p>test</p>
    </div>
  )
}
