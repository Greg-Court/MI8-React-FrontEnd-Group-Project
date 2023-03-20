import React, {useState, useEffect} from 'react'
import { ChatBubbleReceive } from '../components/ChatBubbleReceive'
import { ChatBubbleSend } from '../components/ChatBubbleSend'


export const ChatContainer = ({message}) => {

    return (
    <div className="bg-blue-500 w-1/2 p-3">
      {message && (
        <ChatBubbleReceive text={message} />
      )}
    </div>
  )
}
