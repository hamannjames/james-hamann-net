import React from 'react';
import tw, { css, styled } from 'twin.macro';
import SEO from './SEO';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const Wrapper = tw.main`text-white flex-grow px-8 pb-4`;
const Header = styled.header(css`
  height: 20vw;
  ${tw`relative flex max-h-60 w-full items-end justify-center mb-8 overflow-hidden`};
`);
const Title = tw.h1`relative text-2xl md:text-5xl uppercase md:font-semibold tracking-wider mb-4`;

const Page = ({ title, description = "", mainImage = null, children }) => {
  const headerImage = getImage(mainImage);
  return (
    <Wrapper>
      <SEO title={title} description={description} />
      <div tw="max-w-7xl">
        <Header>
          <GatsbyImage 
            css={css`
              ${tw`w-full h-full z-0 opacity-30`};
              position: absolute !important;
              mix-blend-mode: exclusion;
              border-radius: 10px;
            `} 
            image={headerImage} 
            alt="home" 
          />
          <Title>{title}</Title>
        </Header>
        {children}
      </div>
    </Wrapper>
  )
}

export default Page;