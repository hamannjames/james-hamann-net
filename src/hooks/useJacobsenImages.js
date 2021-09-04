import { useStaticQuery, graphql } from "gatsby";

const useJacobsenImages = () => {
  const { allFile } = useStaticQuery(
    graphql`
      query jacobsenImages {
        allFile(
          filter: {
            sourceInstanceName: {eq: "images"},
            relativeDirectory: {eq: "jacobsens-marine"}, 
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

export default useJacobsenImages;