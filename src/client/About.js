import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <>
      <main>
        <h2>About page!</h2>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default About;
