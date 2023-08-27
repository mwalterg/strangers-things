import { useState } from 'react';
import { Form } from 'react-router-dom';

export default function Login({ setToken }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div>
            <h1>Login</h1>
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
                <button type="submit">Login</button>
            </form>
        </div> 
    )
}