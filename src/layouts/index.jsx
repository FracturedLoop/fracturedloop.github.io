// layouts/index.js
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';

import 'prismjs/themes/prism.css';

import '../css/core.scss';

import headerLogo from '../assets/header.svg';

const Header = () => (
  <div>
    <div className="header-container">
      <Link to="/" className="header-blog-logo">
        <img src={headerLogo} alt="Header" />
      </Link>
    </div>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Josiah's Site"
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
      <link rel="alternate" type="application/rss+xml" href="/rss.xml" />
    </Helmet>
    <Header />
    <Navbar />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 768,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
      className="MainPage"
    >
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
