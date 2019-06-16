const path = require("path");
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      // for each markdown files... create page
      results.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: `/posts${node.frontmatter.slug}`,
          component: path.resolve("./src/components/postLayout.js"),
          context: {
            //data passed into the component
            slug: node.frontmatter.slug,
            //slug will be assecible postLayout component
          },
        });
      });
      resolve();
    });
  });
};
