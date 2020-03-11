import React, { Component } from 'react';

export class Skills extends Component {
  render() {
    return (
      <div className='web-skills'>
        <ul>
          <li>
            <i className='fab fa-html5'></i>
          </li>
          <li>
            <i className='fab fa-css3-alt'></i>
          </li>
          <li>
            <i className='fab fa-js'></i>
          </li>
          <li>
            <i className='fab fa-node'></i>
          </li>
          <li>
            <i className='fab fa-react'></i>
          </li>
          <li>
            <i className='fas fa-database' />
          </li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Skills;
