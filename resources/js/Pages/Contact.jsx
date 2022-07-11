import React from 'react';
import Layout from './Layout';

const Contact = (props) => {
  return (
    <>
      <h1>Contact Us</h1>
      <p>Please contact us at (02) 456 7890</p>
    </>
  );
};

Contact.layout = page => <Layout children={page} title="Contact" />

export default Contact;