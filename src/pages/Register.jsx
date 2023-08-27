import { useState } from 'react';

export default function Register({ setToken }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <h1>Register</h1>
            <form>
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
                <button type="submit">Register</button>
            </form>
        </div> 
    )
}