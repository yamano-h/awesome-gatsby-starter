import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import { BannerWrapper } from './styled';
import { BannerLeftImg } from './styled';
import { BannerTitleWrapper } from './styled';
import { BannerMainTitle } from './styled';
import { BannerSubTitle } from './styled';
import { BannerRightImg } from './styled';

import { SITE_STRINGS } from '../../constants';

const Banner = ({ title })=> (
    <StaticQuery
      query={graphql`
        query {
          image1: file(relativePath: { eq: "shiminuki.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          image2: file(relativePath: { eq: "banner-person.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <BannerWrapper>
            <BannerLeftImg fluid={data.image1.childImageSharp.fluid} style={{position: "absolute"}} />
            <BannerTitleWrapper>
                <BannerMainTitle>{SITE_STRINGS.BANNER_MAIN_TITLE}</BannerMainTitle>
                <BannerSubTitle>{SITE_STRINGS.BANNER_SUB_TITLE}</BannerSubTitle>
            </BannerTitleWrapper>
            <BannerRightImg fluid={data.image2.childImageSharp.fluid} style={{position: "absolute"}} />
        </BannerWrapper>
      )}
    />
);

export { Banner };