import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Screenshot from './components/Screenshot';
import ContentCollaboration from './components/ContentCollaboration';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <Hero />
      <Screenshot />
      <ContentCollaboration />
    </div>
  );
}

export default App;