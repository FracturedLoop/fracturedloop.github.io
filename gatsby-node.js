const path = require('path');

const blogPostTemplate = path.resolve(`src/templates/blog-post.jsx`);
const tagTemplate = path.resolve(`src/templates/tag.jsx`);

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage, createRedirect } = boundActionCreators;

  createRedirect({
    fromPath: '/about',
    redirectInBrowser: true,
    toPath: '/about/person',
  });

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              tags
              title
              unpublished
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node: post }) => {
      createPage({
        path: post.frontmatter.path,
        component: blogPostTemplate,
        context: {}, // additional data can be passed via context
      });
    });

    const tags = [];
    result.data.allMarkdownRemark.edges.forEach(({ node: post }) => {
      post.frontmatter.tags.forEach(tag => {
        if (post.frontmatter.unpublished) return;
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });

    tags.forEach(tag => {
      createPage({
        path: `/tags/${tag}`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });
    return true;
  });
};
