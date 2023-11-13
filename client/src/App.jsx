import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Chat from './components/Pages/Chat';
import Playground from './components/Pages/Playground';
import Profile from './components/Pages/Profile';

//css
import './css/Navbar.css';
import './css/Home.css';
import './css/Profile.css';


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/Playground" element={<Playground />} />
        <Route path="/Profile" element={<Profile />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
