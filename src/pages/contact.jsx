import React from 'react';
import Link from 'gatsby-link';

import '../css/helpers.scss';

const ContactPage = () => (
  <div>
    <div className="modern-header">
      <h1>So you want to get in contact with me, eh?</h1>
    </div>
    <p>
      There’s a couple of ways you can contact me, but the easiest is probably
      via <a href="mailto:josiah.nunemaker@gmail.com">email</a>.
    </p>
    <p>
      You can shoot me an email at{' '}
      <a href="mailto:josiah.nunemaker@gmail.com">josiah.nunemaker@gmail.com</a>.
    </p>
    Didn’t want to contact me? Okay, feel free to{' '}
    <Link to="/">go back to the homepage</Link> then.
  </div>
);

export default ContactPage;
