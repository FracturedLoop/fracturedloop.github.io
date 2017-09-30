import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Sass from 'gatsby-plugin-sass'

import '../css/core.scss'

const Header = () => (
  <div>
    <div
      style={{
        marginBottom: '-1 rem',
        textAlign: 'center'
      }}
      className={"main-page-header"}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0.5rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              position: 'relative',
              color: '#464646',
              fontFamily: 'Cinzel Decorative',
              fontSize: '60%',
              textDecoration: 'none',
            }}
          >
            Josiah Nunemaker

            <span
              style={{
                position: 'relative',
                fontFamily: 'Milkshake',
                fontSize: '90%',
                top: '4px',
                left: '2px'
              }}
            >
              Blog
            </span>
            <div 
              style={{
                position: 'absolute',
                height: '1px',
                backgroundColor: '#464646',
                bottom: '0px',
                left: 0,
                width: '85%'
              }}
            >
            </div>

          </Link>
        </h1>
      </div>
    </div>
    <div
      style={{
        fontFamily: 'Raleway',
        display: 'flex',
        fontSize: '70%',
        textAlign: 'center'
      }}
    >
      <h1
        style={{
          fontWeight: 600,
          flexGrow: 1
        }}
      >
        <Link to="/" >Home</Link>
      </h1>
      <h1
        style={{
          fontWeight: 600,
          flexGrow: 1

        }}
      >
        <Link to="/about" >About</Link>
      </h1>
      <h1
        style={{
          fontWeight: 600,
          flexGrow: 1
        }}
      >
        <Link to="/contact" >Contact</Link>
      </h1>
    </div>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Josiah's Blog"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
    ]}>
      <link href="https://fonts.googleapis.com/css?family=Cinzel+Decorative:700|Raleway:400,600,800" rel="stylesheet" />
    </Helmet >
    <Header />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
