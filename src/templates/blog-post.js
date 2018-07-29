import React from "react";
import Helmet from "react-helmet";
import styled from 'styled-components';
import Link from 'gatsby-link'

import {Tag} from '../globalStyles'

const BlogHeaderWrapper = styled.div`
  text-align:center;
  background:white;
  box-shadow: 0px 0px 17px 0px rgba(194,194,194,0.3);
  padding:32px;
  border-radius: 40px;
  margin-bottom:32px;
  hr{
    height: 4px;
    background: #232537;
    width: 40px;
    margin: auto;
    margin-bottom: calc(1.666rem - 1px);
  }
`
const TagsWrapper = styled.ul`
  list-style:none;
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  padding:0;
  margin:8px 0;
`
const ContentWrapper = styled.div`
  background:white;
  box-shadow: 0px 0px 17px 0px rgba(194,194,194,0.3);
  padding:32px;
  border-radius: 40px;
  margin-bottom:32px;
`
const PostFooter = styled.div`
  background:white;
  box-shadow: 0px 0px 17px 0px rgba(194,194,194,0.3);
  padding:32px;
  border-radius: 40px;
  display:flex;
  justify-content: space-between;
  align-items:center;
`
const FooterLeft = styled.div`
  width:50%;
`
const AuthorWrapper = styled.div`
  display:flex;
  align-items:center;
  h6{
    margin-left: 8px;
  }
  img{
    width:40px;
    border: 2px solid #232537;
    border-radius: 8px;
  }
`
const SocialLogo = styled.a`
  margin-left: 32px;
  svg{
    width:21px;
  }
`
export default function Template({data}) {
  const post = data.markdownRemark;
  console.log(post)
  return (
    <div>
      <Helmet title={`aijs.rocks - ${post.frontmatter.title}`} />
      <div>
        <BlogHeaderWrapper>
          <h1>{post.frontmatter.title}</h1>
          <hr/>
          <p>{post.frontmatter.shortDescription}</p>
          <TagsWrapper>
            {post.frontmatter.tags.map(tag =>
              <Tag key={tag} style={{marginRight:8}}>{tag}</Tag>
            )}
          </TagsWrapper>
          <h6>Built by: <Link to="/">{post.frontmatter.builtBy}</Link></h6>
        </BlogHeaderWrapper>
        <ContentWrapper
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <PostFooter>
          <FooterLeft>
            <AuthorWrapper>
              <img src={post.frontmatter.authorAvatar} alt={post.frontmatter.author}/>
              <h6>{post.frontmatter.author}</h6>
            </AuthorWrapper>
            <p>{post.frontmatter.shortDescription}</p>
          </FooterLeft>
          <div>
            <SocialLogo href="//github.com"><i className="icon-github" /></SocialLogo>
            <SocialLogo href="//github.com"><i className="icon-twitter" /></SocialLogo>
          </div>
        </PostFooter>
      </div>
    </div>
  );
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
;