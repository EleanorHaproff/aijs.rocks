import styled from 'styled-components'

export const Tag = styled.li`
  text-align: left;
  padding: 5px 10px;
  border-radius: 6px;
  color: #232537;
  font-weight: bold;
  font-size: 0.8em;
  background: #fdcb25;
`
export const BlogHeaderWrapper = styled.div`
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
export const TagsWrapper = styled.ul`
  list-style:none;
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
  padding:0;
  margin:8px 0;
`
export const ContentWrapper = styled.div`
  background:white;
  box-shadow: 0px 0px 17px 0px rgba(194,194,194,0.3);
  padding:32px;
  border-radius: 40px;
  margin-bottom:32px;
`
export const PostBuilder = styled.div`
  border-radius: 40px;
  display:flex;
  justify-content: space-between;
  align-items:center;
  margin-bottom: 32px;
`
export const BuiltBy = styled.h6`
  margin-bottom: 8px;
  text-align: left;
`
export const BuilderLeft = styled.div`
  width:50%;
`
export const AuthorWrapper = styled.div`
  display:flex;
  align-items:center;
  h6{
    margin-left: 8px;
    margin-bottom:0;
  }
  img{
    width:40px;
    border: 2px solid #232537;
    border-radius: 8px;
    margin-bottom:0;
  }
`
export const SocialLogo = styled.span`
  font-size: 16px;
  margin-left: 16px;
`
export const DemoIconsWrapper = styled.div`
  display: flex;
`
export const DemoLink = styled.a`
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-left: 16px;
  color:#232537
`
export const DemoIcon = styled.span`
  font-size: 32px;
  margin-right: 4px;
`