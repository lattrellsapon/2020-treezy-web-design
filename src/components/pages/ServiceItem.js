import React, { Component } from 'react';

export class ServiceItem extends Component {
  render() {
    const {
      servicesHeading,
      servicesImage,
      serviceDescription
    } = this.props.service;

    return (
      <div className='two-grid'>
        <div>
          <img src={servicesImage} alt='' />
        </div>
        <div className='services-description'>
          <h4>{servicesHeading}</h4>
          <p>{serviceDescription}</p>
        </div>
      </div>
    );
  }
}

export default ServiceItem;
