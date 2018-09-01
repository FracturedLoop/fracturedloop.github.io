import React, { Component } from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import Chevron from '../assets/chevron.svg';

const StyledNavbar = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 44px;
  width: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  background-color: #424242;
  transform-origin: top left;
  transform: rotate(-90deg) translate(-44px);

  /* For development purposes */
  /* transform: translate(0) rotate(0); */
`;

const MainLink = styled(Link)`
  margin: 0 15px;

  color: #ececec;

  &.selected {
    color: #fff;
    font-weight: 800;
  }
`;

const SublinkGroup = styled.div`
  display: flex;
  position: relative;
  max-width: 0;
  overflow: hidden;

  white-space: nowrap;
  transition-duration: 1s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);

  ${MainLink}.selected + & {
    width: auto;
    max-width: 100vh;
    overflow: hidden;

    & > a {
      margin: 0.5em;

      &:first-child {
        margin-left: 15px;
      }

      &:last-child {
        margin-right: 15px;
      }
    }

    &:before,
    &:after {
      opacity: 1;
    }
  }

  &:before {
    content: '';

    position: absolute;

    width: 10px;
    height: 100%;
    left: -3px;

    background: url(${Chevron});
    background-repeat: no-repeat;
    background-position: center;

    opacity: 0;

    transform: rotate(90deg);

    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:after {
    content: '';
    position: absolute;
    width: 1px;
    height: calc(100% - 15px);
    top: 50%;
    right: 0;

    opacity: 0;

    background-color: #fff;
    transform: translateY(-50%);

    transition-duration: 0.3s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const SubLink = styled(MainLink)``;

const isSub = (paths, match, location) => {
  if (paths.includes(location.pathname)) {
    return true;
  }

  const isAMatch = paths.some(path => {
    if (!path.includes('*')) {
      return false;
    }
    const pathExp = new RegExp(`^${path}`);
    return pathExp.test(location.pathname);
  });

  if (isAMatch) {
    return true;
  }
  return false;
};

export default () => (
  <StyledNavbar className="navbar">
    <MainLink
      to="/"
      className="primary-link"
      isActive={isSub.bind(this, ['/', '/tags', '/tags/*', '/posts/*'])}
      activeClassName="selected"
    >
      Blog
    </MainLink>
    <SublinkGroup>
      <SubLink to="/tags" activeClassName="selected">
        Tags
      </SubLink>
    </SublinkGroup>

    <MainLink
      to="/about"
      className="primary-link"
      isActive={isSub.bind(this, ['/about', '/about/*'])}
      activeClassName="selected"
    >
      About
    </MainLink>
    <SublinkGroup>
      <SubLink to="/about/person" activeClassName="selected">
        As a person
      </SubLink>
      <SubLink to="/about/developer" activeClassName="selected">
        As a developer
      </SubLink>
    </SublinkGroup>

    <MainLink to="/projects" activeClassName="selected">
      Projects
    </MainLink>
    <MainLink to="/contact" activeClassName="selected">
      Contact
    </MainLink>
  </StyledNavbar>
);
