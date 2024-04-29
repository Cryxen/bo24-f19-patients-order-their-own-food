'use client'

import { useEffect, useState } from 'react';

interface Message {
    messageID: number;
    title: string;
    message: string;
    room: string;
}

const RecievedMSG = () => {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        try {
            const response = await fetch('/api/createMessage');
            if (!response.ok) {
                throw new Error('Failed to fetch messages');
            }
            const data = await response.json();
            setMessages(data.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };


    
    const removeMessage = async (messageID: number) => {
        try {
            const response = await fetch(`/api/createMessage?messageID=${messageID}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Failed to remove message');
            }
    
            setMessages(messages.filter(message => message.messageID !== messageID));
        } catch (error) {
            console.error('Error removing message:', error);
        }
    };
    






    return (
        <div>
            {messages.map((message) => (
                <div className="parent" key={message.messageID}>
                    <div className="div1">
                        <h1>{message.title}</h1>
                    </div>
                    <div className="div2">
                        <p>{message.message}</p>
                    </div>
                    <div className="div3">
                        <p>Rom: {message.room}</p>
                    </div>
                    <div className="div4">
                        <button className='removeMsg' onClick={() => removeMessage(message.messageID)}>Fjern melding</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecievedMSG;
