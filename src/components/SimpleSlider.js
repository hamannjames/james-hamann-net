import React, { useState, useEffect } from 'react';
import tw, { styled, css } from 'twin.macro';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

const SliderWrapper = tw.div`relative flex flex-col w-full`;
const SliderContainer = tw.div`relative flex`;
const SlidesContainer = tw.div`overflow-hidden w-full h-full`;
const Slide = styled.div(css`
  ${tw`relative flex h-full`};
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  & > * {
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
  }
`)
const SliderButton = styled.button`
  ${tw`absolute z-10 bottom-1 rounded-md bg-accent-light hover:bg-accent px-2 py-1`};
  ${props => props.position}: 5px; 
`

const SimpleSlider = ({ 
  images = [], 
  width = '480px', 
  height = '244px',
  show = 1,
  imageFit = 'width'
}) => {
  const [length, setLength] = useState(images.length);
  const [index, setIndex] = useState(images.length > show ? show : 0);
  const [touchPosition, setTouchPosition] = useState(null);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isRepeating, setIsRepeating] = useState(images.length > show)

  useEffect(() => {
    setLength(images.length);
  });

  const next = () => {
    if (isRepeating || index < (length - show)) {
      setTransitionEnabled(true);
      setIndex(prevState => prevState + 1);
    }
  }

  const prev = () => {
    if (isRepeating || index > 0) {
      setTransitionEnabled(true);
      setIndex(prevState => prevState - 1);
    }
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (!touchDown) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }
    else if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  }

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (index === 0) {
        setTransitionEnabled(false);
        setIndex(length);
      }
      else if (index === length + show) {
        setTransitionEnabled(false);
        setIndex(show);
      }
    }
  }

  return (
    <SliderWrapper onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <SliderContainer css={css`width: ${width}; max-width: 100%; height: ${height};`}>
        <SlidesContainer>
          <Slide 
            css={css`
              transition: ${transitionEnabled ? 'all 250ms linear' : 'none'};
              transform: translateX(-${(index) * (100)}%);
              width: ${100 / show}%;
            `}
            onTransitionEnd={handleTransitionEnd}
          >
            {isRepeating && <GatsbyImage image={getImage(images[images.length - 1].node)} alt="image" key="-1" />}
            {images.map((image, index) => {
              const gatsbyImage = getImage(image.node);
              return (
                <GatsbyImage image={gatsbyImage} alt="image" key={index} />
              )
            })}
            {isRepeating && <GatsbyImage image={getImage(images[0].node)} alt="image" key={length} />}
          </Slide>
        </SlidesContainer>
        <SliderButton onClick={prev} position="left">&larr;</SliderButton>
        <SliderButton onClick={next}  position="right">&rarr;</SliderButton>
      </SliderContainer>
    </SliderWrapper>
  )
}

export default SimpleSlider;