import { useState, useEffect } from 'react';

export default function Posts({ token }) {
    const COHORT_NAME = '2302-acc-et-web-pt-a';
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
    
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch(`${BASE_URL}/posts`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();

                if (response.ok) {
                    setPosts(data.data.posts);
                } else {
                    setError(data.error.message);
                }
            } catch (err) {
                setError('An error occurred while fetching posts.');
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, [token]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error}</p>;
    }

    return (
        <div>
            <h1>Posts</h1>
            <div className="posts-list">
                {posts.map(post => (
                    <div key={post._id} className="post-item">
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <p>Price: {post.price}</p>
                        <p>Location: {post.location}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
