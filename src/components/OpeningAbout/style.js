import styled from 'styled-components';

import { device } from '../../util/screensizes';
import { layout } from '../../util/styling_vars';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    padding-bottom: 10%;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;

    .text {
        h2 {
            text-align: left;
            margin: 0;
            margin-bottom: 2.5%;
        }
    }

    .imgbox {
        padding: 0 0 15px 15px;

        .img {
            width: 100%;
            height: auto;
            box-shadow: -15px 15px 0 rgb(180, 0, 0);
        }
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};
        grid-column-gap: 50px;
        align-items: center;
        grid-template-columns: 3fr 2fr;
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }
`;
