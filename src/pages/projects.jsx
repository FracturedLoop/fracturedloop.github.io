import React from 'react';

import Project from '../components/Project';

import PrayerShareCover from '../assets/projects/images/prayershare.png';
import CodenamesCover from '../assets/projects/images/codenames.png';
import AscendCover from '../assets/projects/images/ascend.png';

export default () => {
  return (
    <div>
      <h1 className="modern-header">You can check out some of my projects below</h1>
      <Project title="PrayerShare" coverImage={PrayerShareCover} link="https://prayershare.app" cta="Check it out">
        Prayershare is a pseudo-anonymous prayer request sharing
        platform. Users are able to follow their friends, and see when a
        request is made, but the poster will remain anonymous. Additionally,
        the poster can see the amount of people who have partnered with a
        request, but not who has partnered with it. This enables some
        degree of anonymity, while still allowing content to be filtered to
        remain relevant.
        </Project>
      <Project title="Codenames" coverImage={CodenamesCover} link="http://codenamesgo.herokuapp.com" cta="Play a round" altLinks={[{
        label: 'Repo',
        url: 'https://github.com/JosNun/codenames',
      }]}><a href="https://en.wikipedia.org/wiki/Codenames_(board_game)">Codenames</a> is a great game. The only problem is everybody needs to be together to play it. This is a digital version that enables users to play together from any device, and any location. Users can create a game room that other players can join, then they can play together in real-time. The real-time communication runs on WebSockets and is powered by Socket.io. <b>Note:</b> It may take a few seconds for the container to spin up if it has been inactive for a while.</Project>
      <Project title="Ascend Performance" coverImage={AscendCover} link="https://ascend.netlify.com" cta="Give it a look" altLinks={[{
        label: 'Repo',
        url: 'https://github.com/JosNun/ascend-performance',
      }]}>Ascend Performance is a ficticious company I dreamed up to practice my design skills. Additionally, making the website gave me the opportunity to try out some new technologies, such as Styled Components.</Project>
      <Project title="Parabox" cta="Demo" link="https://codepen.io/FracturedLoop/full/VBXpbj/" altLinks={[{
        label: 'Repo',
        url: 'https://github.com/JosNun/parabox.js',
      }]}>Parabox is an easy-to-use paralax library built on top of CSS3 transforms. Available for use both in-browser and in modern build systems.</Project>
    </div>
  )
}
