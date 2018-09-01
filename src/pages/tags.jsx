import React from 'react';
import Link from 'gatsby-link';

import '../css/core.scss'; // add some style if you want!

export default function Tags({ data }) {
  const { edges: posts } = data.posts;
  const tags = [];

  posts.forEach(({ node: post }) => {
    post.frontmatter.tags.forEach(tag => {
      if (post.frontmatter.unpublished) return;
      if (!tags.includes(tag)) {
        tags.push(tag);
      }
    });
  });

  return (
    <div>
      <h1>Looking for something?</h1>
      <h3>You can find posts on a specific topic here.</h3>
      {tags.map(tag => (
        <Link
          to={`/tags/${tag}`}
          style={{
            textDecoration: 'none',
          }}
          key={tag}
        >
          <p>{tag}</p>
        </Link>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  query TagsQuery {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          frontmatter {
            tags
            unpublished
          }
        }
      }
    }
  }
`;
