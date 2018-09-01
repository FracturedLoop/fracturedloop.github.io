import React from 'react';
import Link from 'gatsby-link';

const NotFoundPage = () => (
  <div>
    <h1>Uh Oh</h1>
    <p>
      You tried to go to a page that doesn’t exist, so either you messed up or I
      messed up... Why don’t you head back to <Link to="/">Home</Link>?
    </p>
  </div>
);

export default NotFoundPage;
