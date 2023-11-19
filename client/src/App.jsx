// App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Chat from './components/Pages/Chat';
import Profile from './components/Pages/Profile';
import Playground from './components/Pages/Playground';
import UserProfile from './components/Pages/UserProfile'; // Import the UserProfile component

// css
import './css/Navbar.css';
import './css/Home.css';
import './css/Profile.css';
import './css/Invitation.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/Playground" element={<Playground />} />
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/users/:userId" element={<Profile />} />

        <Route path="/Profile/:userId" element={<UserProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
