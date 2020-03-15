import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import About from './components/layout/About';
import Footer from './components/layout/Footer';

// Pages
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import ContactMe from './components/pages/ContactMe';

// Images
import ResponsiveWebsite from './images/responsive-website.jpg';
import WebsiteMaintenance from './images/website-maintenance.jpg';
import ProjectOne from './images/ProjectOne.png';
import ProjectTwo from './images/ProjectTwo.png';
import ProjectThree from './images/ProjectThree.png';
import ProjectFour from './images/ProjectFour.png';

import './App.css';

export class App extends Component {
  state = {
    projects: [
      {
        id: 1,
        projectName: `Portfolio - Photography`,
        projectImage: ProjectOne,
        projectLink: 'https://tristian-portfolio.herokuapp.com/'
      },
      {
        id: 2,
        projectName: `Portfolio - Photography`,
        projectImage: ProjectTwo,
        projectLink: 'https://youthful-goldberg-54a29a.netlify.com/'
      },
      {
        id: 3,
        projectName: 'Budget Manager App',
        projectImage: ProjectThree,
        projectLink: 'https://stupefied-curie-c68dad.netlify.com/'
      },
      {
        id: 4,
        projectName: 'Simple Weather Application',
        projectImage: ProjectFour,
        projectLink: 'https://compassionate-jang-2b26af.netlify.com/'
      }
    ],
    services: [
      {
        id: 1,
        servicesHeading: 'Responsive Website',
        servicesImage: ResponsiveWebsite,
        serviceDescription:
          'For every project that I work on, I always use the mobile-first approach when developing. This makes my websites responsive and it will sure to look good on all devices no matter what the size.'
      },
      {
        id: 2,
        servicesHeading: 'Website Maintenance',
        servicesImage: WebsiteMaintenance,
        serviceDescription:
          'I offer one year free of charge website maintenance. Therefore, after I deploy your project into the real world, you can contact me to make changes or fix issues without a charge.'
      }
    ]
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path='/' component={About} />
          <Route
            exact
            path='/projects'
            render={props => <Projects projects={this.state.projects} />}
          />
          <Route
            exact
            path='/services'
            render={props => <Services services={this.state.services} />}
          />

          <Route exact path='/contact-me' component={ContactMe} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
