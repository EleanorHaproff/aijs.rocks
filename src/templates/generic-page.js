import React from 'react'
import Helmet from 'react-helmet'

import Logo from '../media/svgs/aiji-logo.svg'
import { BlogHeaderWrapper, ContentWrapper } from '../globalStyles'


export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <Helmet
        title={`aijs.rocks - ${post.frontmatter.title}`}
        meta={[
          { name: 'description', content: post.frontmatter.shortDescription },
          { property: 'og:title', content: post.frontmatter.title },
          {
            property: 'og:description',
            content: post.frontmatter.shortDescription,
          },
          { property: 'og:image', content: Logo },
          { property: 'og:url', content: post.frontmatter.path },
        ]}
      />
      <BlogHeaderWrapper>
        <h1>{post.frontmatter.title}</h1>
        <hr />
      </BlogHeaderWrapper>
      <ContentWrapper
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
    </div>
  )
}
export const pageQuery = graphql`
  query GenericPageByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        shortDescription
      }
    }
  }
`
