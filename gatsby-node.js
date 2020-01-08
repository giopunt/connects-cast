const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const blogPost = path.resolve(`./src/templates/post.js`);

  return graphql(
    `
      {
        allMarkdownRemark{
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                content
                excerpt
                image
                title
              }
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMarkdownRemark.edges;

    posts.forEach((post, index) => {
      createPage({
        path: post.node.fields.slug,
        component: blogPost,
        context: {
          slug: post.node.fields.slug
        },
      })
    })

    return null;
  });
}


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode, basePath: `insights` })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}