import { useState } from 'react';

export default function Register({ setToken }) {
    const COHORT_NAME = '2302-acc-et-web-pt-a';
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BASE_URL}/users/register`, {
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
                // Successful registration
                setToken(result.data.token);
            } else {
                setError(result.error.message);
            }
        } catch (err) {
            setError('An error occurred while registering.');
        }
    };

    return (
        <div>
            <h1>Register</h1>
            <form onSubmit={handleRegister}>
                {/* ... form fields for username and password */}
                <button type="submit">Register</button>
            </form>
            {error && <p>Error: {error}</p>}
        </div>
    );
}
