import React, { Component } from 'react';

import { Link } from 'react-router-dom';

import ProjectItem from './ProjectItem';

export class Projects extends Component {
  render() {
    return (
      <div className='container'>
        <div className='projects-message text-center'>
          <h1>Projects</h1>
          <p>Developing your ideas into reality.</p>
        </div>
        <div className='projects three-grid'>
          {this.props.projects.map(project => (
            <ProjectItem project={project} key={project.id} />
          ))}
        </div>
        <div className='projects-message-additional text-center'>
          <p>
            Are you keen to be a part of the list above?{' '}
            <Link to='/contact-me' className='set-normal'>
              Get in touch
            </Link>
            , I will buy us a coffee.
          </p>
        </div>
      </div>
    );
  }
}

export default Projects;
