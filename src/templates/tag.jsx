import React from 'react';
import Link from 'gatsby-link';
import TagsList from '../components/TagsList';

const TAG_SEPERATOR = ', ';

const formatPostTags = tags => {
  let newTags = tags.sort((a, b) => {
    if (a > b) return 1;
    else if (b > a) return -1;
    return 0;
  });
  newTags = newTags.map(el => el.charAt(0).toUpperCase() + el.substring(1));
  return newTags.join(TAG_SEPERATOR);
};

export default function Template({ data }) {
  const { edges: posts } = data.posts; // data.markdownRemark holds our post data
  const allPostTags = data.tags;

  const tags = [];

  const getAllTags = allPosts => {
    allPosts.edges.forEach(({ node: post }) => {
      post.frontmatter.tags.forEach(tag => {
        if (post.frontmatter.unpublished) return;
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });
  };

  getAllTags(allPostTags);

  return (
    <div className="blog-posts">
      <TagsList tags={tags} />
      {posts.map(({ node: post }) => (
        <Link
          to={post.frontmatter.path}
          style={{
            textDecoration: 'none',
          }}
          key={post.tags + post.id}
        >
          <div className="blog-post-preview" key={post.tags + post.id}>
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
  );
}

export const pageQuery = graphql`
  query BlogPostByTag($tag: String!) {
    posts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
          }
        }
      }
    }
    tags: allMarkdownRemark(filter: { frontmatter: { unpublished: {} } }) {
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
