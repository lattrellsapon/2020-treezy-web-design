import React, { Component } from 'react';
import SocialLinks from '../pages/SocialLinks';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container flex-container'>
          <div>
            <h4>&copy; Treezy Web Design</h4>
          </div>
          <div>
            <SocialLinks />
          </div>
          <div>
            <h4>Daily motivational quote:</h4>
            <p>Strive for greatness</p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
