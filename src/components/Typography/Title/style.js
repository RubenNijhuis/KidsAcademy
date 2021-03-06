import styled from 'styled-components';

import { colors } from '../../../util/styling_vars';
import { device } from '../../../util/screensizes';

export const H1 = styled.h1`
    color: ${colors.turqouise};
    font-size: 3em;
    text-align: center;
    font-weight: 700;
    margin-top: 10%;
    hyphens: auto;
    hyphens: auto;
    padding: 0 5%;
    margin-bottom: 0;

    @media ${device.tablet} {
        margin-bottom: 0;
        margin-top: 5%;
    }

    @media ${device.laptop} {
        font-size: 80px;
        margin-top: 5%;
    }
`;

export const H2 = styled.h2`
    color: ${colors.blue};
    text-align: center;
    font-size: 30px;
    margin-bottom: 5%;
`;

export const H3 = styled.h3`
    color: ${colors.blue};
    text-align: center;
    font-size: 30px;
    margin-bottom: 5%;
`;

export const H4 = styled.h4`
    color: ${colors.blue};
    font-size: 18px;
`;

export const H5 = styled.h5`
    color: ${colors.blue};
    font-size: 16px;
`;

export const H6 = styled.h6`
    color: ${colors.blue};
    font-size: 14px;
`;
