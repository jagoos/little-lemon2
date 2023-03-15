import React from 'react';

function Nav() {
  return (
    <nav className='nav'>
      <div className="nav-container">
        <a href="//" className="nav-logo">
          Little lemon
        </a>
          <ul className='nav-menu'>
            <li>
              <a href="url" className="nav-item">Home</a>
            </li>
            <li>
              <a href="url" className="nav-item">Menu</a>
            </li>
            <li>
              <a href="url" className="nav-item">About</a>
            </li>
            <li>
              <a href="url" className="nav-item">Reservations</a>
            </li>
            <li>
              <a href="url" className="nav-item">Contacts</a>
            </li>
            <li>
              <a href="url" className="nav-item">Login</a>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Nav;
