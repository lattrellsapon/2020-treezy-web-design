import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <header>
          <Link className='link' to='/'>
            <h1>Treezy Web Design</h1>
          </Link>
        </header>
        <div className='website-links'>
          <ul>
            <li>
              <Link className='link' to='/projects'>
                RECENT WORK
              </Link>
            </li>
            <li>
              <Link className='link' to='/services'>
                SERVICES
              </Link>
            </li>

            <li>
              <Link className='link' to='/contact-me'>
                CONTACT ME
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
