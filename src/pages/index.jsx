import React from 'react';
import Link from 'gatsby-link';

import '../css/core.scss'; // add some style if you want!

import { formatPostTags } from '../utils/utils';

export default function Index({ data }) {
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
      <div className="blog-posts">
        {posts
          .filter(
            post =>
              post.node.frontmatter.title.length > 0 &&
              !post.node.frontmatter.unpublished
          )
          .map(({ node: post }) => (
            <Link
              to={post.frontmatter.path}
              style={{
                textDecoration: 'none',
              }}
              key={post.id}
            >
              <div className="blog-post-preview" key={post.id}>
                <h1 className="blog-post-preview-title">
                  {post.frontmatter.title}
                </h1>
                <h2 className="blog-post-preview-date">
                  {post.frontmatter.date}
                  <span className="blog-post-tags">
                    {formatPostTags(post.frontmatter.tags)}
                  </span>
                </h2>
                <p className="blog-post-preview-excerpt">{post.excerpt}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query IndexQuery {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            tags
            unpublished
          }
        }
      }
    }
  }
`;
