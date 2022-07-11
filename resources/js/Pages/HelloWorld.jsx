import React from 'react';
import Layout from './Layout';

const HelloWorld = (props) => {
  return (
    <>
      <h1>Welcome</h1>
      <p>Hello World, welcome to your first Inertia app!</p>
    </>
  );
};

HelloWorld.layout = page => <Layout children={page} title="HelloWorld" />

export default HelloWorld;