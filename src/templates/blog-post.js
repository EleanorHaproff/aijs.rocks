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
  BuilderLeft,
  SocialLogo,
  DemoLink,
  DemoIconsWrapper,
  DemoIcon,
  BuiltBy
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
          <PostBuilder>
            <BuilderLeft>
              <BuiltBy>Built by:</BuiltBy>
              <AuthorWrapper>
                <img
                  src={post.frontmatter.authorAvatar}
                  alt={post.frontmatter.author}
                />
                <h6>{post.frontmatter.author}<SocialLogo href="//twitter.com"><i className="icon-twitter" /></SocialLogo></h6>
              </AuthorWrapper>
            </BuilderLeft>
            <DemoIconsWrapper>
              <DemoLink href="#"><DemoIcon className="icon-app"><span className="path1"></span><span className="path2"></span></DemoIcon> View app</DemoLink>
              <DemoLink href="#"><DemoIcon className="icon-code"><span className="path1"></span><span className="path2"></span><span className="path3"></span><span className="path4"></span></DemoIcon>View code</DemoLink>
              <DemoLink href="#"><DemoIcon className="icon-link"><span className="path1"></span><span className="path2"></span><span className="path3"></span></DemoIcon>View Link</DemoLink>
            </DemoIconsWrapper>
          </PostBuilder>
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
