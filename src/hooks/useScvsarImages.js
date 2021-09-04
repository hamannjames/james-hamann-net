import { useStaticQuery, graphql } from "gatsby";

const useScvsarImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query scvsarImages {
        allFile(
          filter: {
            sourceInstanceName: {eq: "images"},
            relativeDirectory: {eq: "scvsar"}, 
            extension: {regex: "/(jpg)|(jpeg)|(png)/"}
          }
        ) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData(width: 480)
                fluid {
                  src
                  aspectRatio
                  base64
                  sizes
                }
              }
              name
            }
          }
        }
      }
    `
  )

  return allFile.edges;
}

export default useScvsarImages;