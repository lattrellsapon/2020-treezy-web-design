import React, { Component } from 'react';

export class SocialLinks extends Component {
  render() {
    return (
      <div className='social-links'>
        <ul>
          <li>
            <a href='mailto:lattrellsapon@gmail.com'>
              <i className='far fa-envelope'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/lattrell-sapon-772b49143/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-linkedin-in'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.facebook.com/Treezy-Web-Design-374311436556053/?modal=admin_todo_tour'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook-f'></i>
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/lattrellwebdesign/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram'></i>
            </a>
          </li>
          <li>
            <a
              href='https://github.com/lattrellsapon'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-github'></i>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SocialLinks;
