import Page from '../components/Page';
import React from 'react';
import StockSentinelGif from "../images/gifs/stock_sentinel_short.gif";
import BartellDrugsGif from "../images/gifs/bartell_drugs_short.gif";
import tw, { css, styled } from 'twin.macro';
import useJacobsenImages from '../hooks/useJacobsenImages';
import SimpleSlider from '../components/SimpleSlider';
import useScvsarImages from '../hooks/useScvsarImages';

const ProjectContainer = styled.div(css`
  ${tw`flex flex-wrap lg:flex-nowrap md:space-x-4 mt-12 justify-center`};
  h2 {
    ${tw`text-2xl text-action-dark mb-4`};
  }
  figure {
    width: 480px;
    max-width: 100%;
  }
  figcaption {
    ${tw`text-xs text-center italic mt-2`};
  }
  img {
    ${tw`max-w-full`};
  }
  p {
    & + p {
      ${tw`mt-4`};
    }
  }
  a {
    ${tw`text-action-light underline hover:text-action`};
  }
  & > div {
    max-width: 100%;
  }
`);

const Projects = () => {

  const jacobsenMarineImages = useJacobsenImages().sort((a,b) => a.node.name - b.node.name);
  const scvsarImages = useScvsarImages().sort((a,b) => a.node.name - b.node.name);
  
  return (
    <Page title="Projects">
      <ProjectContainer>
        <div>
          <h2>Stock Sentinel (under development)</h2>
          <figure>
            <img src={StockSentinelGif} alt="Stock Sentinel Showcase" />
            <figcaption>Search and filter stock transactions made by US senators</figcaption>
          </figure>
        </div>

        <div>
          <p tw="mt-4 md:mt-12">
            Stock Sentinel is a project that tracks stock transactions made by our elected representatives.
            Users can search and filter through stock transactions dating back to 2012, track transactions from specific senators or tickers over time, and sign up to contribute in the effort to collate data.
          </p>
          <p>
            I started Stock Sentinel after the Gamestop craze, once congress started to talk about drafting legislation around it. I wanted to know whether there were special interests at work, and I wanted there to be more transparency over how our representatives operated in the market.
          </p>
          <p>
            Stock Sentinel is currently in beta phase, and my plan is to release it by the end of 2021. It is built using the TALL stack. You can track its progress here: <a href="https://github.com/hamannjames/stock-sentinel">https://github.com/hamannjames/stock-sentinel</a>.
          </p>
        </div>
      </ProjectContainer>

      <ProjectContainer>
        <div>
          <h2>Bartell Drugs Store Locator</h2>
          <figure>
            <img src={BartellDrugsGif} alt="Bartell Drugs Showcase" />
            <figcaption>Search for Bartell Drugs stores near you</figcaption>
          </figure>
        </div>

        <div>
          <p tw="mt-4 md:mt-12">
            This store locator was built for Bartell Drugs to help users locate stores near them, with the added benefit of being able to filter by store features. It uses the Google Maps API to display the map and create markers for the map.
          </p>
          <p>
            Bartell Drug's website is built on Wordpress. This locator utilizes Wordpress' JSON rest API to fetch all stores, and jQuery to perform DOM manipulation once the stores are filtered/searched.
          </p>
          <p>
            You can find a store near you with this store locator here: <a href="https://www.bartelldrugs.com/store-locator/">https://www.bartelldrugs.com/store-locator/</a>.
          </p>
        </div>
      </ProjectContainer>

      <ProjectContainer>
        <div>
          <h2>SCVSAR</h2>
          <SimpleSlider images={scvsarImages} />
        </div>

        <div>
          <p tw="mt-4 md:mt-12">
            SCVSAR \(Snohomish County Volunteer Search and Rescue\) are a volunteer group dedicated to providing emergency services to urban and wilderness areas in Snohomish County. This website serves as a portal for all their units as well as a way to contact and donate to the organization.
          </p>
          <p>
            It was tons of fun working on this website. I loved the design and the challenge of implementing so many different dynamic pages. It was built in Wordpress with a custom theme leveraging several different custom post types. Not only were the technical aspects fun, it was also rewarding building a website for a group dedicated to serving their community.
          </p>
          <p>
            Learn a bit more about SCVSAR here: <a href="https://scvsar.org/">https://scvsar.org/</a>.
          </p>
        </div>
      </ProjectContainer>

      <ProjectContainer>
        <div>
          <h2>Jacobsen's Marine</h2>
          <SimpleSlider images={jacobsenMarineImages} />
        </div>

        <div>
          <p tw="mt-4 md:mt-12">
            Jacobsen's Marine is a boat supplier based in Edmonds, WA. This website was built to showcase their inventory and represent the team's love for boating and being out at sea.
          </p>
          <p>
            You can dig deeper into the site, and maybe even get a boat, here: <a href="https://www.jacobsensmarine.com/">https://www.jacobsensmarine.com/</a>.
          </p>
        </div>
      </ProjectContainer>
    </Page>
  )
}

export default Projects;