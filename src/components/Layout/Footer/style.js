import styled from 'styled-components';

import { device } from '../../../util/screensizes';
import { layout } from '../../../util/styling_vars';

export const Container = styled.footer`
    font-weight: 200;
    background-color: #37375c;
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    color: white;
    font-size: 0.7em;
    position: relative;

    img {
        max-width: 100%;
    }

    #content {
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        justify-items: start;

        div {
            max-width: 120px;
            /* margin-right: 5%; */
            margin-bottom: 10%;
            display: inline-block;
            flex-direction: column;
            font-size: 16px;

            a {
                display: block;
            }

            span {
                display: block;
            }
        }
    }

    #copy {
        position: absolute;
        bottom: 0px;
        left: 50%;

        transform: translate(-50%);
        width: 100%;
        max-width: 100%;
        text-align: center;
        margin-bottom: 2.5%;

        span {
            font-size: 1em;
        }
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};

        div {
            width: auto;
            margin-right: 5%;
            margin-bottom: 5%;
        }

        #content {
            div {
                font-size: 14px;
            }
        }

        #copy {
            span {
                font-size: 1em;
            }
        }
    }

    @media ${device.laptop} {
        padding: ${layout.padding.height.laptop} ${layout.padding.width.laptop};
    }
`;
