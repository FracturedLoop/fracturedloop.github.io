import React from 'react'
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
`;

const Info = styled.article`
  padding: 2em;
  padding-top: 0;
  
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
`

const LinkButton = styled.a`
  display: block;
  
  margin-right: 0.5em;
  
  background-color: #424242;
  border: 2px solid #424242;
  color: #fff;
  padding: 0 1em;
  `;

const AltButton = styled.a`
  display: block;
  
  box-sizing: border-box;
  margin-right: 0.5em;

  border: 2px solid #424242;
  color: #424242;
  padding: 0 1em;
`

function makeAltLinks(linksArr) {
  if (typeof linksArr === 'undefined') return;

  let altLinks = linksArr.map((link, i) =>
    <AltButton href="link.url" target="_blank" key={i}>{link.label}</AltButton>
  )

  return altLinks;
}

export default props => {
  return (
    <StyledProject>
      <CoverImage className="cover-image" src={props.coverImage} alt="project image" />
      <Info>
        <Title>{props.title}</Title>
        <Description>{props.children}</Description>
        <Links>
          <LinkButton href={props.link} target="_blank">{props.cta || 'Check it out'}</LinkButton>
          {makeAltLinks(props.altLinks)}
        </Links>
      </Info>
    </StyledProject>
  )
}
