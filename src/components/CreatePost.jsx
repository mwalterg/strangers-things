import { useState } from 'react';

export default function CreatePost({ token }) {
    const COHORT_NAME = '2302-acc-et-web-pt-a';
    const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [location, setLocation] = useState('');
    const [willDeliver, setWillDeliver] = useState(false);

    const handleCreatePost = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch(`${BASE_URL}/posts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({
                    post: {
                        title,
                        description,
                        price,
                        location,
                        willDeliver
                    }
                })
            });

            if (response.ok) {
                
                
            } else {
                console.error('Failed to create post');
            }
        } catch (err) {
            console.error('An error occurred while creating a post', err);
        }
    };
    return (
        <>
            <label htmlFor="title">Title</label>
            <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description</label>
            <input
                type="text"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <label htmlFor="price">Price</label>
            <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <label htmlFor="location">Location</label>
            <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
            />
            <label htmlFor="willDeliver">Will Deliver</label>
            <input
                type="checkbox"
                id="willDeliver"
                value={willDeliver}
                onChange={(e) => setWillDeliver(e.target.value)}
            />
            <button type="submit" onClick={handleCreatePost}>Create Post</button>
        </>
    )
}