import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'

import {
  Tag,
  BlogHeaderWrapper,
  TagsWrapper,
  ContentWrapper,
  AuthorWrapper,
  PostFooter,
  FooterLeft,
  SocialLogo,
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
          { property: 'og:image', content: post.frontmatter.thumbnail },
          { property: 'og:url', content: post.frontmatter.path },
          { property: 'og:type', content: 'article' },
        ]}
      />
      <div>
        <BlogHeaderWrapper>
          <h1>{post.frontmatter.title}</h1>
          <hr />
          <p>{post.frontmatter.shortDescription}</p>
          <TagsWrapper>
            {post.frontmatter.tags.map(tag =>
              <Tag key={tag} style={{marginRight:8}}>{tag}</Tag>
            )}
          </TagsWrapper>
          <h6>
            Built by: <Link to="/">{post.frontmatter.builtBy}</Link>
          </h6>
        </BlogHeaderWrapper>
        <ContentWrapper
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        {/* Only show the author footer if we are a blog post */}
        {kind === 'blog' ? (
          <PostFooter>
            <FooterLeft>
              <AuthorWrapper>
                <img
                  src={post.frontmatter.authorAvatar}
                  alt={post.frontmatter.author}
                />
                <h6>{post.frontmatter.author}</h6>
              </AuthorWrapper>
              <p>{post.frontmatter.shortDescription}</p>
            </FooterLeft>
            <div>
              <SocialLogo href="//github.com"><i className="icon-github" /></SocialLogo>
              <SocialLogo href="//github.com"><i className="icon-twitter" /></SocialLogo>
            </div>
          </PostFooter>
        ) : (
          ''
        )}
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
        date(formatString: "MMMM DD, YYYY")
        path
        author
        authorAvatar
        shortDescription
        tags
        builtBy
      }
    }
  }
`
