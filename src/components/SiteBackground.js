import React, {useEffect, useState} from 'react';
import tw, {css, styled} from 'twin.macro';
import { keyframes } from '@emotion/react';

const slide = keyframes`
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 15% 100%;
  }
`

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #18354a 0%, #17574F 33%, #18354a 66%, #17574F 100%);
  background-size: 400% 400%;
  animation: ${slide} 18s linear infinite;
  @-moz-document url-prefix() {
    animation: none;
  }
`

const SiteBackground = () => {

  return (
    <Background />
  )
}

export default SiteBackground;