import React, { Component } from 'react';

export class About extends Component {
  render() {
    return (
      <div className='wrap'>
        <div className='about-me'>
          <div className='about-me-content'>
            <p>
              Hi, my name is <span className='highlight'>Lattrell Sapon</span>.
              I am a <span className='highlight'>front end developer</span>. I
              can help develop your ideas into reality. Get in touch and let's
              build something beautiful together.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
