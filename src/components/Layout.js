import React from 'react';
import Nav from './Nav';
import "tailwindcss/dist/base.min.css"
import tw, { GlobalStyles, styled, css } from 'twin.macro'
import { keyframes } from '@emotion/react'
import Footer from './Footer';
import SEO from './SEO';

const slide = keyframes`
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 15% 100%;
  }
`

const Wrapper = styled.div(css`
  ${tw`relative flex flex-col md:flex-row min-h-screen`};
  background: linear-gradient(45deg, #18354a 0%, #17574F 33%, #18354a 66%, #17574F 100%);
  background-size: 400% 400%;
  animation: ${slide} 18s linear infinite;
  @-moz-document url-prefix() {
    animation: none;
  }
`);
const Header = tw.div`text-white md:w-1/5 md:max-w-xs`
const Content = tw.div`flex flex-col text-white md:w-4/5`;

const Layout = ({ children }) => {
  return (
    <>
      <SEO title="I like building cool things" />
      <GlobalStyles />
      <Wrapper>
        <Header>
          <Nav />
        </Header>
        <Content>
          {children}
          <Footer />
        </Content>
      </Wrapper>
    </>
  )
}

export default Layout;