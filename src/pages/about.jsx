import React from 'react';
import Link from 'gatsby-link';

import '../css/helpers.scss';

const AboutPage = () => (
  <div>
    <div className="modern-header">
      <h2>Hey there,</h2>
      <h1>I’m a full stack web developer.</h1>
    </div>
    I tinker with all sorts of things, but my passion is building rich user
    interfaces.
    <p>
      <i>React</i> is my friend :)
    </p>
    <p>
      Oh, and I also use <i>GraphQL</i>, or, more particularly, <i>Apollo</i>.
    </p>
    <p>
      <i>Node.js</i> with <i>Express</i>, too.
    </p>
    <p>
      I also tinker with <i>MySQL</i>.
    </p>
    <p>
      Feel free to check out some of my{' '}
      <a href="https://github.com/josnun">projects</a>
    </p>
    <h4>
      <Link to="/">go back to the homepage</Link>
    </h4>
  </div>
);

export default AboutPage;
