import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreatePost from './pages/CreatePost'
import feed from './pages/feed';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/create" element={<CreatePost />} />
        <Route path="/feed" element={<feed />} />
      </Routes>
    </Router>
  );
};

export default App;