import React, { useState } from 'react';

function ChatInterface() {
    const [message, setMessage] = useState('');
    const [chatHistory, setChatHistory] = useState([]);

    const sendMessage = () => {
        if (message.trim()) {
            setChatHistory([...chatHistory, { sender: 'user', text: message }]);
            setMessage('');
            setTimeout(() => {
                setChatHistory((prev) => [
                    ...prev,
                    { sender: 'ai', text: 'This is an AI response' }
                ]);
            }, 1000);
        }
    };

    return (
        <div className="chat-interface">
            <div className="chat-history">
                {chatHistory.map((chat, index) => (
                    <div
                        key={index}
                        className={`chat-message ${chat.sender === 'ai' ? 'ai-message' : 'user-message'}`}
                    >
                        {chat.text}
                    </div>
                ))}
            </div>
            <div className="message-input">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message"
                />
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    );
}

export default ChatInterface;
