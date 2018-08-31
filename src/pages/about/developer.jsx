import React from 'react';
import Link from 'gatsby-link';

export default () => {
  return (
    <div>
      <div className="modern-header">
        <h2>So who am I as a developer?</h2>
        <h1>I’m a full stack web developer.</h1>
      </div>

      <p>My expertise is in front-end, but I've also done my fair share of backend programming too.
      Additionally, I tinker with all sorts of things, but my passion is building rich user
      interfaces.
      </p>

      <h3>So what languages and frameworks do you use for the frontend?</h3>
      <p>
        For the front-end I've been using React recently. I also use a few of the more popular libraries for it, such as React Router and Styled Components (<i>love</i> that one). When I'm working with GraphQL, I lean towards the Apollo Client library as well. In addition to React, I had also tinkered with Vue at one point, but never got around to doing anything major with it.
      </p>
      <p>
        Before I used React, or when I'm working on a project that doesn't use React, I like to use Sass (the SCSS flavor) for my CSS, as it is a <i>huge</i> time saver.
      </p>

      <h3>And for backend?</h3>
      <p>
        As far as language, I use Node.js. I often use Express as well for the framework. I've worked with Apollo Server when I'm working with GraphQL server-side too. When I need to store data for an extended period of time, I usually reach for a relational database like Postgres or MySQL. To make things syntactically easier when working in Node, I use Knex.js for building the queries.
      </p>
      <p>
        If you'd like to see how I use these technologies, feel free to check out some of my{' '}
        <a href="https://github.com/josnun">projects.</a>
      </p>

      <h3>Where'd you get your programming start?</h3>
      <p>I've always liked working with computers, and I'm also quite curious as well. At one point in time quite a while ago, I had wanted to build a website, so I did some research and discovered HTML. Not long into that, I realized that development was <i>way</i> out of my experience range. (that was back in the CSS 2 days). I continued to tinker with it a bit, but I was never really passionate about it. At some point, I had gotten involved in a <a href="https://biohazard4050.org" target="_blank" >robotics team</a>, and for a year or so, I was really the only computer-savvy student at that time (although, I wasn't really that computer savvy back then.). Since there was really nobody else, I struggled through (with a mentor's help) writing the robot software in LabView. The next year, another student joined who had experience with Java, so I kinda hopped on the Java train for a bit, because for some reason, I didn't really like the graphical programming environment of LabView. </p>
      <p>At some point in the middle of all of this, I discovered JavaScript. I worked on it in my free time (particularly in the off-season of robotics.), and somehow, I've stuck with it and continued with web development ever since.</p>
    </div>
  )
}
