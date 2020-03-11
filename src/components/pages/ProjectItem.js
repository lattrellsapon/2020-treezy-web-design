import React, { Component } from 'react';

export class ProjectItem extends Component {
  render() {
    const { projectName, projectImage, projectLink } = this.props.project;
    return (
      <div>
        <div className='project-links'>
          <a
            href={projectLink}
            target='_blank'
            rel='noopener noreferrer'
            className='text-center '
          >
            <p>{projectName}</p>
          </a>
        </div>
        <div>
          <img src={projectImage} alt='' />
        </div>
      </div>
    );
  }
}

export default ProjectItem;
