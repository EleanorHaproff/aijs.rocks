import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import {Tag} from '../globalStyles'

const PostsWrapper = styled.div`
  display:flex;
  justify-content: space-between;
  align-items:center;
  flex-wrap: wrap;
`
const Post = styled.div`
  background:#232537;
  width: calc(50% - 16px);
  height: 430px;
  border-radius:16px;
  margin-bottom:32px;
`
const PostTitle = styled.h2`
  height:50px;
  padding:16px;
`
const Thumbnail = styled.div`
  width:100%;
  height:200px;
  background-size:cover;
`
const PostFooter = styled.div`
  padding:16px;
`
const Description = styled.div`
  color:white;
`
const TagsWrapper = styled.ul`
  list-style:none;
  display:flex;
  flex-wrap:wrap;
  padding:0;
  margin:8px 0;
`
const Details = styled.div`
  display:flex;
  align-items:center;
  justify-content:space-between;
  color:white
`
const AuthorWrapper = styled.div`
  display:flex;
  align-items:center;
  h6{
    color:#FDCB25;
    margin-left:8px;
  }
  img{
    border-radius:8px;
    height:32px;
  }
`
const Date = styled.h6`
  color:#49E1C2;
`
export default function Index({ data }) {
  const { edges: posts } = data.allMarkdownRemark;
  console.log(data)
  return (
    <PostsWrapper>
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          return (
            <Post key={post.id}>
              <PostTitle>
                <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
              </PostTitle>
              <Thumbnail style={{backgroundImage:`url(${post.frontmatter.thumbnail})`}} />
              <PostFooter>
                <Description>{post.frontmatter.shortDescription}</Description>
                <TagsWrapper>
                  {post.frontmatter.tags.split(',').map((tag,i)=>
                    <Tag key={tag + i} style={{marginRight:8}}><Link to="/">{tag}</Link></Tag>
                  )}
                </TagsWrapper>
                <Details>
                  <AuthorWrapper>
                    <img src={post.frontmatter.authorAvatar} alt={post.frontmatter.author}/>
                    <h6>{post.frontmatter.author}</h6>
                  </AuthorWrapper>
                  <Date>{post.frontmatter.date}</Date>
                </Details>
              </PostFooter>
            </Post>
          );
        })}
    </PostsWrapper>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            author
            thumbnail
            authorAvatar
            shortDescription
            tags
          }
        }
      }
    }
  }
`;