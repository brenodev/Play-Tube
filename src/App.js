import React from 'react';
// CUSTOM COMPONENTS
import SearchBar from './components/SearchBar'
import VideoList from './components/VideoList'
import VideoPlayer from './components/VideoPlayer'

import './App.css';

function App() {
  return (
    <div className="container">
      <SearchBar />
      <VideoList />
      <VideoPlayer />
    </div>
  );
}

export default App;
