import React, { useEffect, useRef } from "react";
import { ChatBubbleReceive } from "../components/ChatBubbleReceive";
import { ChatBubbleSend } from "../components/ChatBubbleSend";
import amrdb5 from "../assets/other/amrdb5.jpeg"

export const ChatContainer = ({ messages }) => {
  // creates a new ref called messagesEndRef
  // a ref used to create a mutable reference to a DOM element
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    // optional chaining operator (?.) is used to ensure that scrollIntoView is only called if messagesEndRef.current exists
    // scrollIntoView method takes an options object as an argument, with a behavior property set to 'smooth'
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.75)), url(${amrdb5})`}} className="bg-cover w-1/2 p-3 overflow-y-auto shadow-2xl">
      {messages.map((msg, index) => {
        return msg.type === "receive" ? (
          <div key={index} className="w-full flex justify-start">
            <ChatBubbleReceive text={msg.text} />
          </div>
        ) : (
          <div key={index} className="w-full flex justify-end">
            <ChatBubbleSend text={msg.text} />
          </div>
        );
      })}
      <div ref={messagesEndRef}></div>
    </div>
  );
};
