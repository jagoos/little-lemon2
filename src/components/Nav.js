import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className='nav'>
      <div className="nav-container">
        <a href="//" className="nav-logo">
          Little lemon
        </a>
          <ul className='nav-menu'>
            <li>
              <Link to="/" className="nav-item">Home</Link>
            </li>
            <li>
              <Link to="/notfound" className="nav-item">About</Link>
            </li>
            <li>
              <Link to="/notfound" className="nav-item">About</Link>
            </li>
            <li>
              <Link to="/booking" className="nav-item">Reservations</Link>
            </li>
            <li>
              <Link to="/notfound" className="nav-item">About</Link>
            </li>
            <li>
              <Link to="/notfound" className="nav-item">About</Link>
            </li>
          </ul>
        </div>
    </nav>
  );
}

export default Nav;
