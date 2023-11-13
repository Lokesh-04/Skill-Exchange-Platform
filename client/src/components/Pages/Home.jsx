import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  return (
    <div className="users-container">
      <h1 className="heading">Here We GO</h1>
      <div className="users-list">
        {data.length > 0
          ? data.map((user) => (
            <div className="user-card" key={user.id}>
              <div className="user-profile">
                <img src={user.profileImage} alt="Profile Icon" className="profile-icon" />
                <div className="user-details">
                  <h3 className="user-name">{user.name}</h3>
                  <p className="user-email">{user.email}</p>
                </div>
              </div>
              <div className="user-skills-interests">
                <p className="user-skills">Skills: {user.skills}</p>
                <p className="user-interests">Interests: {user.interests}</p>
              </div>
            </div>
          ))
          : (
            <p className="no-users-found">No users found.</p>
          )}
      </div>
    </div>
  );
};

export default Home;
