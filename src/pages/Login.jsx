import { useState } from 'react';

export default function Login({ setToken }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const COHORT_NAME = '2302-acc-et-web-pt-a';
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BASE_URL}/users/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: {
                        username: username,
                        password: password
                    }
                })
            });

            const result = await response.json();

            if (response.ok) {
                // Successful login
                setToken(result.data.token); // Update token in the parent component
            } else {
                // Unsuccessful login
                console.error(result.error);
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <label htmlFor="username">Username</label>
                <input 
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </div> 
    )
}
