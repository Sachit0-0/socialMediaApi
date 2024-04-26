import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api/';

// Fetch all posts
export const fetchPosts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
};

// Create a new post
export const createPost = async (postData) => {
  try {
    const response = await axios.post(API_BASE_URL, postData);
    return response.data;
  } catch (error) {
    console.error('Error creating post:', error);
    throw error;
  }
};

// Fetch a single post by ID
export const fetchPostById = async (postId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}${postId}/`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching post ${postId}:`, error);
    throw error;
  }
};

// Update an existing post
export const updatePost = async (postId, postData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}${postId}/`, postData);
    return response.data;
  } catch (error) {
    console.error(`Error updating post ${postId}:`, error);
    throw error;
  }
};

// Delete a post by ID
export const deletePost = async (postId) => {
  try {
    await axios.delete(`${API_BASE_URL}${postId}/`);
  } catch (error) {
    console.error(`Error deleting post ${postId}:`, error);
    throw error;
  }
};
