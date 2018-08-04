// layouts/index.js
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import 'prismjs/themes/prism.css';

import '../css/core.scss';

import headerLogo from '../assets/header logo.svg';

const Header = () => (
  <div>
    <div className="header-container">
      <Link to="/" className="header-blog-name">
        <img src={headerLogo} alt="Header" />
      </Link>
    </div>
    <div className="nav-container">
      <Link className="nav-btn" to="/">
        Home
      </Link>
      <Link className="nav-btn" to="/about">
        About
      </Link>
      <Link className="nav-btn" to="/contact">
        Contact
      </Link>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Josiah's Blog"
      meta={[
        {
          name: 'description',
          content:
            'A blog and how-to on tech, web development, and all things computers.',
        },
        { name: 'keywords', content: 'web development, blog' },
      ]}
    >
      <meta
        name="google-site-verification"
        content="iTqQGhz5A11iZYYP6fr9lS1lpnduASXddf5sr9tUN78"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Cinzel+Decorative:700|Raleway:400,500,600,800"
        rel="stylesheet"
      />
    </Helmet>
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 768,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
