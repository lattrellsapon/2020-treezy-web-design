import React, { Component } from 'react';

export class EmailSuccess extends Component {
  render() {
    return (
      <div className='container success'>
        <p>Hi {this.props.username}, </p>
        <br />
        <p>Thank you for getting in touch.</p>
        <p>We will look into your email and get back to you shortly.</p>
        <br />
        <br />
        <p>Kind Regards,</p>
        <p>Treezy Web Design</p>
      </div>
    );
  }
}

export default EmailSuccess;
