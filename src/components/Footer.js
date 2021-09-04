import React from 'react';
import tw, { styled, css } from 'twin.macro';
import SocialMedia from './SocialMedia';

const FooterWrapper = tw.footer`w-full px-8 py-4 my-4`;
const FooterContainer = tw.div`md:max-w-7xl text-sm text-center flex justify-center items-center space-x-3`

const Footer = () => {
  return (
    <FooterWrapper id="contact">
      <FooterContainer>
        <p>
          Contact me:
        </p>
        <a css={css`
            svg{
              ${tw`inline fill-current hover:text-action-light`}
            };
          `} 
          href="#mailgo" 
          data-address="hamannjames87" 
          data-domain="gmail.com"
        >
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"/></svg>
        </a>
        <a css={css`
            svg{
              ${tw`inline fill-current hover:text-action-light`}
            };
          `} 
          href="#mailgo" 
          data-tel="(206)496-7825"
        >
          <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3.445 17.827c-3.684 1.684-9.401-9.43-5.8-11.308l1.053-.519 1.746 3.409-1.042.513c-1.095.587 1.185 5.04 2.305 4.497l1.032-.505 1.76 3.397-1.054.516z"/></svg>
        </a>
        <p>
          Follow me:
        </p>
        <SocialMedia />
      </FooterContainer>
    </FooterWrapper>
  )
}

export default Footer;