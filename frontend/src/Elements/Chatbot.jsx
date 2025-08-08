import React, { useRef, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import './chatbot.css';

function Chatbot() {
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: 'Hi, how can I help you ?'
    }
  ]);
  const chatBodyRef = useRef(null);
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, chatOpen]);


  const [newMessage, setNewMessage] = useState('');
  const handleSendMessage = async () => {
    if (!newMessage.trim()) {
      return;
    }
    const userMsg = {
      sender: 'user',
      text: newMessage,
    };
    setMessages([...messages, userMsg]);
    try {
      const response = await axios.post('http://localhost:8000/chat', {
        message: newMessage,
      });
      const botMsg = {
        sender: 'bot',
        text: response.data.reply,
      };
      setMessages((prev) => [...prev, botMsg]);
    } catch (error) {
      console.error('Error sending message', error);
    }
    setNewMessage('');
  };

  return (
    <div>
      <div className='bot-icon' onClick={() => setChatOpen(!chatOpen)}>
        <img src='/bot.jpeg' alt='bot image' />
      </div>
      {chatOpen && (<div className='chat-container'>
        <div className='chat-header'>Chatbot</div>

        <div className='chat-body' ref={chatBodyRef}>
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.sender}`}>{msg.text} </div>
          ))}
        </div>
        <div className='chat-footer'>
          <input type="text" value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder='Type your message...' />
          <button onClick={handleSendMessage}>Send</button>
        </div>
      </div>
      )}
    </div>
  );
}




export default Chatbot;