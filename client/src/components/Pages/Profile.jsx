import React from 'react';

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-image">
          <img src="https://picsum.photos/210/300" alt="" id="chimg" />
        </div>
        <div className="profile-details">
          <h1>User 1</h1>
          <p>Engineering college</p>
          <p id="lightcol">Bhimavaram, AP</p>
          <p id="lightcol">abc@gmail.com</p> {/* Added email section */}
        </div>
        {/* <div className="edit-icon" 
        onClick={() => handleEditProfile()}>
          <i className="fas fa-edit"></i>
        </div> */}
      </div>
      <div className="skills-interests">
        <div className="profile-skills">
          <h2>Skills:</h2>
          <div className="collection">
            <div className="chip">HTML</div>
            <div className="chip">CSS</div>
            {/* <div className="chip">JavaScript</div> */}
          </div>
        </div>
        <div className="profile-interests">
          <h2>Interests:</h2>
          <div className="collection">
            <div className="chip">React</div>
            <div className="chip">Node.js</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
