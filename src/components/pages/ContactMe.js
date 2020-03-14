import React, { Component } from 'react';
import SocialLinks from './SocialLinks';

import EmailSuccess from '../emails/EmailSuccess';
import EmailError from '../emails/EmailError';

export class ContactMe extends Component {
  state = {
    username: '',
    email: '',
    message: '',
    messageSent: false,
    emailSentError: false
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();

    const templateId = 'template_lcAf46LY';

    this.sendFeedback(templateId, {
      message_html: this.state.message,
      from_name: this.state.username,
      reply_to: this.state.email,
      to_name: 'Lattrell'
    });
  };

  sendFeedback = (templateId, variables) => {
    window.emailjs
      .send('gmail', templateId, variables)
      .then(res => {
        if (res.status === 200) {
          this.setState({
            messageSent: true
          });
        } else {
          this.setState({
            messageSent: 'There was an error',
            emailSentError: true
          });
        }
      })
      .catch(err => console.log(`Error: ${err}`));
  };

  render() {
    if (!this.state.messageSent) {
      return (
        <div className='container text-center'>
          <div className='contact-me-message'>
            <h1>Contact</h1>
            Thank you for visiting Treezy Web Design. Are you interested in
            working together?
            <p>Get in touch below. </p>
          </div>

          <SocialLinks />
          <form onSubmit={this.onSubmit}>
            <input
              type='text'
              name='username'
              placeholder='Enter name'
              onChange={this.onChange}
              value={this.state.username}
              required
            />
            <input
              type='email'
              name='email'
              placeholder='Enter email'
              onChange={this.onChange}
              value={this.state.email}
              required
            />
            <textarea
              name='message'
              placeholder='Your message'
              onChange={this.onChange}
              value={this.state.message}
              required
            ></textarea>

            <input type='submit' value='SUBMIT' className='submit-button' />
          </form>
        </div>
      );
    } else if (this.state.messageSent) {
      return <EmailSuccess username={this.state.username} />;
    } else if (
      this.state.messageSent === 'There was an error' &&
      this.state.emailSentError
    ) {
      return <EmailError username={this.state.username} />;
    }
  }
}

export default ContactMe;
