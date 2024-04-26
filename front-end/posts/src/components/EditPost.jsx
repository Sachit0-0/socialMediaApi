import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchPostById, updatePost } from '../api';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      try {
        const post = await fetchPostById(id);
        setTitle(post.title);
        setContent(post.content);
      } catch (error) {
        console.error(`Failed to fetch post ${id}:`, error);
      }
    };

    loadPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = { title, content };
      await updatePost(id, postData);
      navigate('/'); // Navigate to home page after successful update
    } catch (error) {
      console.error(`Failed to update post ${id}:`, error);
    }
  };

  return (
    <div>
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
        <button type="submit">Update Post</button>
      </form>
    </div>
  );
};

export default EditPost;
