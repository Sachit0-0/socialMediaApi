import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchPosts, deletePost } from '../api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Failed to fetch posts:', error);
      }
    };

    loadPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await deletePost(postId);
      setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
    } catch (error) {
      console.error(`Failed to delete post ${postId}:`, error);
    }
  };

  return (
    <div>
      <h2>Posts</h2>
      <Link to="/posts/new">Create New Post</Link>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.content}</p>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
            <Link to={`/posts/${post.id}/edit`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
