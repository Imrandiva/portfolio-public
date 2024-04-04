import styled from '@emotion/styled'
import { Stack } from '@chakra-ui/react'

const PostContainer = styled(Stack)`
  &&& {
    padding-top: 24px;
    font-size: 16px;
    * {
      box-sizing: border-box;
      margin: 0;
    }
    * + :not(code) {
      margin-top: 1.2rem;
    }
    li {
      margin-top: 0 !important;
    }
    blockquote {
      padding: 16px;
      color: rgba(255, 255, 255, 0.82);
      border-left: 0.25em solid;
      border-color: #3ccf91;
      background: #080808;
    }
    blockquote p {
      font-style: italic;
    }
    img {
      display: block;
      margin: auto;

    }
    @media (max-width: 500px) {
      img {
        display: block;
      margin: auto;
      // make images smaller 
      width: 100%;
      height: auto;
      
      }
    }
    h1 {
      font-family: 'Montserrat', sans-serif;
      text-transform: uppercase;
      font-style: bold;
      font-size: 2.5em;

    }
    h2 {
      font-family: 'Montserrat', sans-serif;
      font-style: italic;
      

    }
    h3, h4, h5 {
      font-family: 'Montserrat', sans-serif;
      font-style: bold;
      font-size: 1.5em;
      

    }
    em{
      display: block;
      margin: auto;
      text-align: center;
      margin-top: 0.7rem;
      margin-bottom: 1.2rem;
      
    }
  }
`
export default PostContainer
