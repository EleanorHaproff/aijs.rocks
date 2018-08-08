import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import {
  Tag,
  BlogHeaderWrapper,
  TagsWrapper,
  ContentWrapper,
  AuthorWrapper,
  PostBuilder,
  BuilderWrapper,
  SocialLogo,
  DemoLink,
  DemoIconsWrapper,
  DemoIcon,
  BuiltBy,
} from '../globalStyles'

export default function Template({ data }) {
  const post = data.markdownRemark
  const kind = post.frontmatter.layout
  return (
    <div>
      <Helmet
        title={`aijs.rocks - ${post.frontmatter.title}`}
        meta={[
          { name: 'description', content: post.frontmatter.shortDescription },
          { name: 'keywords', content: post.frontmatter.tags },
          { property: 'og:title', content: post.frontmatter.title },
          {
            property: 'og:description',
            content: post.frontmatter.shortDescription,
          },
          {
            property: 'og:image',
            content:
              post.frontmatter.thumbnail.childImageSharp.responsiveSizes.src,
          },
          { property: 'og:url', content: post.frontmatter.path },
          { property: 'og:type', content: 'article' },
        ]}
      />
      <div>
        <BlogHeaderWrapper>
          <h1>{post.frontmatter.title}</h1>
          <hr />
          <p>{post.frontmatter.shortDescription}</p>

          <AuthorWrapper>
            <h6>by</h6>
            <img
              src={post.frontmatter.authorAvatar}
              alt={post.frontmatter.author}
            />
            <h6>
              <a target="_blank" href={post.frontmatter.authorLink}>
                {post.frontmatter.author}
              </a>
            </h6>
          </AuthorWrapper>

          <DemoIconsWrapper>
            {post.frontmatter.demo && (
              <DemoLink target="_blank" href={post.frontmatter.demo}>
                <DemoIcon className="icon-app">
                  <span className="path1" />
                  <span className="path2" />
                </DemoIcon>Demo
              </DemoLink>
            )}
            {post.frontmatter.code && (
              <DemoLink target="_blank" href={post.frontmatter.code}>
                <DemoIcon className="icon-code">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                  <span className="path4" />
                </DemoIcon>Code
              </DemoLink>
            )}
            {post.frontmatter.link && (
              <DemoLink target="_blank" href={post.frontmatter.link}>
                <DemoIcon className="icon-link">
                  <span className="path1" />
                  <span className="path2" />
                  <span className="path3" />
                </DemoIcon>Link
              </DemoLink>
            )}
          </DemoIconsWrapper>

          <TagsWrapper>
            {post.frontmatter.tags.map(tag => (
              <Tag key={tag} style={{ marginRight: 8 }}>
                {tag}
              </Tag>
            ))}
          </TagsWrapper>
        </BlogHeaderWrapper>

        <ContentWrapper
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        demo
        code
        link
        date(formatString: "MMMM DD, YYYY")
        path
        author
        authorAvatar
        authorLink
        shortDescription
        tags
        thumbnail {
          childImageSharp {
            responsiveSizes(maxWidth: 1024) {
              src
            }
          }
        }
      }
    }
  }
`
