import Page from '../components/Page';
import React from 'react';
import tw, { styled, css } from 'twin.macro';
import { graphql } from 'gatsby';

const experience = ((new Date().getFullYear()) - 2015);
const SkillsList = styled.ul(css`
    ${tw`flex flex-col text-right space-y-1`};
    li {
      &:after {
        content: '\\25B4';
        padding-left: 5px;
        transition: transform ease .3s;
        display: inline-block;
        transform-origin: center;
      }

      &:hover {
        &:after {
          transform: rotate(-90deg);
        }
      }
    }
  `
);
const SkillsListHeading = tw.h2`text-2xl text-action-dark mb-2 mt-4 text-right`;
const SkillsListContainer = styled.div`
  ${tw`mr-4 lg:mr-24`};
  svg {
    transition: transform ease .3s;
  }
  &:hover {
    svg {
      transform: scaleX(-1);
    }
  }
`;
const SkillsListWrapper = tw.div``;

const Index = ({ data }) => {
  const mainImage = data.sanityPage.mainImage.asset;
  return (
    <Page title="Welcome" mainImage={mainImage}>
      <p tw="text-center mb-8">
        I've been building cool things on the web for {experience} years, and picked up some skills along the way.
      </p>
      <div tw="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-12">
        <SkillsListWrapper>
          <SkillsListContainer>
            <SkillsListHeading>
              Languages <svg tw="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
            </SkillsListHeading>
            <SkillsList>
              <li>Javascript</li>
              <li>PHP</li>
              <li>C#</li>
              <li>HTML(5)</li>
              <li>CSS(3)</li>
            </SkillsList>
          </SkillsListContainer>
        </SkillsListWrapper>
        
        <SkillsListWrapper>
          <SkillsListContainer>
            <SkillsListHeading>
              Frameworks <svg tw="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
</svg>
            </SkillsListHeading>
            <SkillsList>
              <li>Laravel</li>
              <li>Wordpress</li>
              <li>Gatsby</li>
            </SkillsList>
          </SkillsListContainer>
        </SkillsListWrapper>
        
        <SkillsListWrapper>
          <SkillsListContainer>
            <SkillsListHeading>
              Frontend <svg tw="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
</svg>
            </SkillsListHeading>
            <SkillsList>
              <li>React</li>
              <li>Livewire</li>
              <li>Alpine JS</li>
              <li>Tailwind CSS</li>
              <li>JQuery</li>
            </SkillsList>
          </SkillsListContainer>
        </SkillsListWrapper>
        
        <SkillsListWrapper>
          <SkillsListContainer>
            <SkillsListHeading>
              Backend <svg tw="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
</svg>
            </SkillsListHeading>
            <SkillsList>
              <li>NodeJS</li>
              <li>Express</li>
              <li>MySQL</li>
              <li>MongoDB</li>
            </SkillsList>
          </SkillsListContainer>
        </SkillsListWrapper>

        <SkillsListWrapper>
          <SkillsListContainer>
            <SkillsListHeading>
              Paradigms <svg tw="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
</svg>
            </SkillsListHeading>
            <SkillsList>
              <li>MVC</li>
              <li>Test Driven Development</li>
              <li>Object Oriented Programming</li>
              <li>Functional Programming</li>
              <li>Mobile-First Design</li>
            </SkillsList>
          </SkillsListContainer>
        </SkillsListWrapper>

        <SkillsListWrapper>
          <SkillsListContainer>
            <SkillsListHeading>
              Misc. <svg tw="h-6 w-6 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
</svg>
            </SkillsListHeading>
            <SkillsList>
              <li>SEO</li>
              <li>Accessibility</li>
              <li>GraphQL</li>
              <li>Jest</li>
              <li>PHPUnit</li>
              <li>Docker</li>
              <li>Analytics</li>
            </SkillsList>
          </SkillsListContainer>
        </SkillsListWrapper>
      </div>
    </Page>
  )
}

export const query = graphql`
  query HomePageQuery {
    sanityPage(title: {eq: "Home"}) {
      mainImage {
        asset {
          gatsbyImageData
        }
      }
    }
  }
`

export default Index