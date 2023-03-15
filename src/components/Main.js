import React from 'react';

function Main() {
  return (
    <main className="main">
      <div className="main-container">
        <div className="main-content">
          <h2 className="main-heading">My Image</h2>
          <p className="main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="My Image" className="main-image" />
      </div>
    </main>
  );
}

export default Main;