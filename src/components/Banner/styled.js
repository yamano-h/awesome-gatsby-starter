import styled from 'styled-components';
import Img from 'gatsby-image';

import { COLOR } from '../../constants';

export const BannerWrapper = styled.div`
    background: ${COLOR.BLUE03};
    width: 100%;
    height: 626px;
    position: relative;
`;

export const BannerLeftImg = styled(Img)`
    width: 566px;
    position: absolute;
    bottom: 0;
    z-index: 1;
`;

export const BannerTitleWrapper = styled.div`
    position: absolute;
    width: 566px;
    margin: 0 auto;
    z-index: 2;
    left: 0;
    right: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;


export const BannerMainTitle = styled.h2`
    text-align: center;
    flex-grow: 2;
    align-self: center;
    display: flex;
    align-items: center;
    color: ${COLOR.GRAY01};
`;

export const BannerSubTitle = styled.h1`
    text-align: center; 
    align-self: center;
    flex-grow: 3;
    display: flex;
    align-items: flex-start;
    white-space: pre-line;
    color: ${COLOR.GRAY01};
`;

export const BannerRightImg = styled(Img)`
    width: 452px;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
`;