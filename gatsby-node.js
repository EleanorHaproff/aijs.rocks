const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)
  const genericPageTemplate = path.resolve(`src/templates/generic-page.js`)

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
              demo
              code
              path
              title
              author
              authorAvatar
              thumbnail {
                childImageSharp {
                  responsiveSizes(maxWidth: 400) {
                    src
                    srcSet
                    sizes
                  }
                }
              }
              shortDescription
              tags
              builtBy
              layout
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      // Depening on the layout in front matter choose the right template
      let template = blogPostTemplate
      if (node.frontmatter.layout === 'generic') {
        template = genericPageTemplate
      }

      createPage({
        path: node.frontmatter.path,
        component: template,
        context: {}, // additional data can be passed via context
      })
    })
  })
}
