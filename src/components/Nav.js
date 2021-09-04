import React from 'react';
import { Link } from 'gatsby';
import tw, { css, styled } from 'twin.macro';
import SocialMedia from './SocialMedia';

const isActive = (({isCurrent}) => isCurrent ? {className: 'active'} : {});

const NavLinkContent = styled.div(css`
  position: relative;
  line-height: 1;
  transition: transform ease .3s;

  &:hover {
    ${tw`text-action-light`};
    transform: translateX(-10px);
  }

  &:after {
    ${tw`text-xs right-1/2 -bottom-2 md:-right-4 md:bottom-0`};
    transition: transform ease .3s, opacity ease .3s;
    display: inline-block;
    position: absolute;
    opacity: 0;
    transform: rotate(-180deg);
    transform-origin: center;
    content: "\\25E2";
    padding-left: 5px;
  }

  &:hover {
    &:after {
      opacity: 100;
      transform: rotate(0deg);
    }
  }

  .active & {
    ${tw`text-lg text-action-dark`};
    &:after {
      ${tw`md:transform-none`};
      content: '\\25E2';
      opacity: 100;
      transform: translateX(50%) rotate(45deg);
    }
    &:hover {
      transform: none;
      &:after {
        transform: translateX(50%) rotate(45deg);
      }
    }
  }
`);

const Menu = tw.ul`sticky top-4 flex space-x-4 md:space-x-0 md:flex-col items-center md:items-end space-y-0 md:space-y-6`;

const Nav = () => {
  return (
    <nav tw="flex flex-col md:h-full py-4 px-8 items-center md:items-end">
      <div tw="text-center md:text-right mb-4 md:mb-20">
        <Link to="/" tw="text-2xl md:text-3xl hover:text-action-light">
          James Hamann
        </Link>
        <p>
          <a href={ process.env.GATSBY_GITHUB_URL } css={css`
              ${tw`hover:text-action-light`};
              svg {
                ${tw`inline fill-current hover:text-action-light mr-2`};
              }
            `}
          >
            <svg fill="#fff" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            Web Developer
          </a>
        </p>
      </div>
      <Menu>
        <li>
          <Link getProps={isActive} to="/">
            <NavLinkContent>Home</NavLinkContent>
          </Link>
        </li>
        <li>
          <Link getProps={isActive} to="/projects">
            <NavLinkContent>Projects</NavLinkContent>
          </Link>
        </li>
        <li>
          <Link getProps={isActive} to="/about">
            <NavLinkContent>About</NavLinkContent>
          </Link>
        </li>
        <li>
          <NavLinkContent>
            <a href="#mailgo" data-address="hamannjames87" data-domain="gmail.com">Contact</a>
          </NavLinkContent>
        </li>
      </Menu>
    </nav>
  );
}

export default Nav;