'use client'
import '../styles/globals.scss';
import '../styles/messagehealthcare.scss';

import React, { useState } from 'react';
import Layout from './layout';

const SendMessage = () => {
    const [title, setTitle] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        console.log('Form submitted');

        try {
            const response = await fetch(`/api/createMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, room, message })
            });

            if (!response.ok) {
                throw new Error('Melding feilet');
            }

            console.log('Message sent successfully');
            setTitle('');
            setRoom('');
            setMessage('');
            setErrorMessage('');
        } catch (error) {
            console.error('Error sending message:', error);
            setErrorMessage('Sendingsfeil, prøv på nytt');
        }
    };

    return (
        <Layout>
            <div className="mainDiv">
                <h1>Meldingsmodul</h1>
                <section className='mainSection'>
                    <article className='messageMain'>
                        <form onSubmit={handleSubmit}>
                            <input 
                                type="text" 
                                placeholder='Tittel' 
                                className='titleInput' 
                                value={title} 
                                onChange={(e) => setTitle(e.target.value)} 
                            />
                            <input 
                                type="text" 
                                placeholder='Romnr' 
                                className='titleInput' 
                                value={room} 
                                onChange={(e) => setRoom(e.target.value)} 
                            />
                            <textarea 
                                name="message" 
                                id='message' 
                                placeholder='Meldingstekst' 
                                className='messageInput' 
                                value={message} 
                                onChange={(e) => setMessage(e.target.value)} 
                            ></textarea>
                            <button type='submit' className='submitButton'>Send melding til kjøkken</button>
                            {errorMessage && <p className="error">{errorMessage}</p>}
                        </form>
                    </article>
                </section>
            </div>
        </Layout>
    );
};

export default SendMessage;
