import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;

    &:nth-of-type(even) .cover-image {
      order: 2;
    }

    &:nth-of-type(even) .cover-image ~ .project-info {
      padding-left: 0;
    }

    &:nth-of-type(odd) .cover-image ~ .project-info {
      padding-right: 0;
    }
  }
`;

const CoverImage = styled.div`
  width: 80%;
  padding-top: 80%;
  margin: auto;

  background: url(${props => props.src}) no-repeat;
  background-size: contain;
  background-position: center;

  @media screen and (min-width: 768px) {
    padding-top: 50%;
    width: 100%;
    max-width: 30%;
  }

  & ~ .project-info {
    padding: 2em;
  }
`;

const Info = styled.article`
  @media screen and (min-width: 768px) {
    padding: 2em;
  }
`;

const Title = styled.h2`
  text-align: center;
  margin: 1em auto 0;

  @media screen and (min-width: 768px) {
    text-align: left;
  }
`;

const Description = styled.p`
  margin: 0.5em auto;
  font-size: 0.7rem;
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: -1em;

  @media screen and (min-width: 768px) {
    justify-content: initial;
  }
`;

const LinkButton = styled.a.attrs({
  className: 'no-ul',
})`
  display: block;

  margin-right: 0.5em;
  margin-top: 1em;

  padding: 0 1em;
`;

const PrimaryButton = styled(LinkButton)`
  background-color: #424242;
  border: 2px solid #424242;
  color: #fff;
`;

const AltButton = styled(LinkButton)`
  border: 2px solid #424242;
  color: #424242;
`;

function makeAltLinks(linksArr) {
  if (typeof linksArr === 'undefined') return;

  const altLinks = linksArr.map((link, i) => (
    <AltButton href={link.url} target="_blank noopener noreferrer" key={i}>
      {link.label}
    </AltButton>
  ));

  return altLinks;
}

export default props => (
  <StyledProject>
    {props.coverImage && (
      <CoverImage
        className="cover-image"
        src={props.coverImage}
        alt="project image"
      />
    )}
    <Info className="project-info">
      <Title>{props.title}</Title>
      <Description>{props.children}</Description>
      <Links>
        <PrimaryButton href={props.link} target="_blank noopener noreferrer">
          {props.cta || 'Check it out'}
        </PrimaryButton>
        {makeAltLinks(props.altLinks)}
      </Links>
    </Info>
  </StyledProject>
);
