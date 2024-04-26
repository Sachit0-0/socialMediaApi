
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes and Route
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';

function App() {
  return (
    <Router>
      <div>
        <h1>My Blog App</h1>
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/new" element={<CreatePost />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;