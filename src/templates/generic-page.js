import React from 'react'
import Helmet from 'react-helmet'

import {
  BlogHeaderWrapper, 
  ContentWrapper, 
} from '../globalStyles'


export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <Helmet title={`aijs.rocks - ${post.frontmatter.title}`} />
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
      }
    }
  }
`
;
