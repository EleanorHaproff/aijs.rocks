import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  text-align: center;
  background: white;
  box-shadow: 0px 0px 17px 0px rgba(194, 194, 194, 0.3);
  padding: 32px;
  border-radius: 40px;
  margin-bottom: 32px;
  hr {
    height: 4px;
    background: #232537;
    width: 40px;
    margin: auto;
    margin-bottom: calc(1.666rem - 1px);
  }
`

const ContentWrapper = styled.div`
  background: white;
  box-shadow: 0px 0px 17px 0px rgba(194, 194, 194, 0.3);
  padding: 32px;
  border-radius: 40px;
  margin-bottom: 32px;
`

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <div>
      <Helmet title={`aijs.rocks - ${post.frontmatter.title}`} />
      <HeaderWrapper>
        <h1>{post.frontmatter.title}</h1>
        <hr />
      </HeaderWrapper>
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
