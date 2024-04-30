'use client'

import { useEffect, useState } from 'react';
import ConfirmationWindow from './ComfirmationWindow';

interface Message {
    messageID: number;
    title: string;
    message: string;
    room: string;
    createdAt: string;
}

const RecievedMSG = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState<boolean>(false);
    const [messageToDelete, setMessageToDelete] = useState<number | null>(null);
    const [messageTitleToDelete, setMessageTitleToDelete] = useState<string>('');
    const [inboxEmpty, setInboxEmpty] = useState<boolean>(false);

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
            setInboxEmpty(data.data.length === 0);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    const removeMessage = async (messageID: number, messageTitle: string) => {
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
    
            const updatedMessages = messages.filter(message => message.messageID !== messageID);
            setMessages(updatedMessages);
            setMessageTitleToDelete('');
            setInboxEmpty(updatedMessages.length === 0);
        } catch (error) {
            console.error('Error removing message:', error);
        }
    };
    

    const handleDeleteMessageButton = (messageID: number, messageTitle: string) => {
        setMessageToDelete(messageID);
        setMessageTitleToDelete(messageTitle);
        setShowDeleteConfirmation(true);
    };

    const handleConfirmPress = async () => {
        if (messageToDelete !== null && messageTitleToDelete !== '') {
            await removeMessage(messageToDelete, messageTitleToDelete);
            setMessageToDelete(null);
            setShowDeleteConfirmation(false);
        }
    };

    const formatDateTime = (createdAt: string): string => {
        const date = new Date(createdAt);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear() % 100;
    
        const formattedDay = day < 10 ? `0${day}` : `${day}`;
        const formattedMonth = month < 10 ? `0${month}` : `${month}`;
    
        const hours = date.getHours();
        const minutes = date.getMinutes();
    
        const formattedHours = hours < 10 ? `0${hours}` : `${hours}`;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    
        return `${formattedDay}/${formattedMonth}/${year} ${formattedHours}:${formattedMinutes}`;
    };
    

    return (
        <div className="main-wrapper">
            {inboxEmpty ? (
                <p>Innboks er tom</p>
            ) : (
                messages.slice().reverse().map((message) => (
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
                            <button className='removeMsg' onClick={() => handleDeleteMessageButton(message.messageID, message.title)}>Fjern melding</button>
                            <p>Tid motatt: {formatDateTime(message.createdAt)}</p>
                        </div>
                    </div>
                ))
            )}
            {showDeleteConfirmation && (
                <ConfirmationWindow
                    confirmButton="Fjern melding"
                    declineButton="Gå tilbake"
                    handleConfirmButtonPress={handleConfirmPress}
                    handleDeclineButtonPress={() => setShowDeleteConfirmation(false)}
                    message={`Er du sikker på at du ønsker å fjerne meldingen: ${messageTitleToDelete}?`}
                />
            )}
        </div>
    );
};

export default RecievedMSG;
