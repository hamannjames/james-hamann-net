import Page from '../components/Page';
import React from 'react';
import tw, { styled, css } from 'twin.macro';

const experience = ((new Date().getFullYear()) - 2015);

const About = () => {
  return (
    <Page title="A little about me" description="Want to learn more about me? That's cool! Here's an intro.">
      <div css={css`
          ${tw`max-w-5xl mx-auto`};
          p + p {
            ${tw`mt-4`};
          }
        `}
      >
        <p>
          Oh hey! You made it to the about me page. I am not sure how many people are interested in the life story of developers, but I guess it's gotta be some people. I am more than just my github profile!
        </p>
        <p>
          I've been in web development for {experience} years. I am mostly self taught. I have an associates of applied science with an empthasis on web programming, and am currently pursuing an undergrad in software programming at WGU.
        </p>
        <p>
          I love being a web developer. I love building things and solving problems, learning new tech, designing solutions. I love that the industry is moving fast and constantly evolving, presenting new opportunities to grow.
        </p>
        <p>
          I am married with a family. Taking care of my family is a great incentive to keep leveling up in my developer skills and advancing my career. We are always out and about in the Seattle area, grabbing good food, hiking, playing at parks, going to Funko. They keep me on my toes.
        </p>
        <p>
          I love reading and writing. I love watching good movies with a bowl of popcorn. I love grilling with charcoal. I love video games (console pleb unfortunately). I love running and exercising (but not necessaruly going to the gym).
        </p>
        <p>
          I am an extrovert. I love being around people and working with teams. I've spent time in my career as a solo freelancer and as part of a team, and I gotta say I prefer the latter. There's nothing quite like a good pair coding session huh?
        </p>
        <p>
          So that's a bit about me. If you want to learn more, reach out to me on my social profiles!
        </p>
      </div>
    </Page>
  )
}

export default About;