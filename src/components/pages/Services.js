import React, { Component } from 'react';

import ServiceItem from './ServiceItem';

import Skills from './Skills';

export class Services extends Component {
  render() {
    return (
      <div className='container'>
        <div className='services-message text-center'>
          <h1>Skills</h1>
          <p>
            Throughout the years of my software development career, I have
            gained a number of skills to add to my arsenal. These are the
            technology I use to produce awesome websites.
          </p>
          <Skills />
        </div>
        <div className='services-message text-center'>
          <h1>What I can do for you.</h1>
          <div className='services'>
            {this.props.services.map(service => (
              <ServiceItem service={service} key={service.id} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
