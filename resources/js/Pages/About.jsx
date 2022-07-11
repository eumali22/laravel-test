import React from 'react';
import Layout from './Layout';

const About = (props) => {
  return (
    <>
      <h1>About</h1>
      <p>This is the about page</p>
    </>
  );
};

About.layout = page => <Layout children={page} title="About" />

export default About;