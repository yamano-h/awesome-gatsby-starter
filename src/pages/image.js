import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import { COLOR } from '../constants';
/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const Card = styled.div`
  background-color: ${COLOR.SKY_BLUE};
`;

const CharaName = styled.p`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;

const Image = ({ name }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Card>
        <Img fluid={data.placeholderImage.childImageSharp.fluid} />
        <CharaName>{name}</CharaName>
      </Card>
    )}
  />
);

export default Image;
