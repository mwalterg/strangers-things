import { useState } from 'react';

export default function Posts({ token }) {
    const [posts, setPosts] = useState([])
    return (
        <div>
            <h1>Posts</h1>
        </div> 
    )
}