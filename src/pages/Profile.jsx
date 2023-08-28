import { useState, useEffect } from 'react';

export default function Profile({ token }) {
    const COHORT_NAME = '2302-acc-et-web-pt-a';
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

    const [username, setUsername] = useState('');
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProfileData() {
            try {
                // Fetch user profile information
                console.log('Token:', token);

                const profileResponse = await fetch(`${BASE_URL}/users/me`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                const profileData = await profileResponse.json();

                if (profileResponse.ok) {
                    setUsername(profileData.data.username);
                } else {
                    setError(profileData.error.message);
                }

                // Fetch user messages
                const messagesResponse = await fetch(`${BASE_URL}/users/me/messages`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });

                const messagesData = await messagesResponse.json();

                if (messagesResponse.ok) {
                    setMessages(messagesData.data.messages);
                } else {
                    setError(messagesData.error.message);
                }
            } catch (err) {
                setError('An error occurred while fetching profile data.');
            } finally {
                setLoading(false);
            }
        }

        fetchProfileData();
    }, [token]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <h2>Welcome, {username}!</h2>
            <h3>Your Messages:</h3>
            <ul>
                {messages.map(message => (
                    <li key={message._id}>{message.content}</li>
                ))}
            </ul>
        </div>
    );
}
