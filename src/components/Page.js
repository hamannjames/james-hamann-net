import React from 'react';
import tw, { css, styled } from 'twin.macro';

const Wrapper = tw.main`text-white flex-grow px-8 py-4`;
const Header = styled.header(css`
  height: 20vw;
  ${tw`flex max-h-60 w-full items-end justify-center mb-8`};
`);
const Title = tw.h1`text-2xl md:text-5xl uppercase md:font-semibold tracking-wider`;

const Page = ({ title, children }) => {
  return (
    <Wrapper>
      <div tw="max-w-7xl">
        <Header>
          <Title>{title}</Title>
        </Header>
        {children}
      </div>
    </Wrapper>
  )
}

export default Page;