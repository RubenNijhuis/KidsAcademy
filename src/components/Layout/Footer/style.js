import styled from 'styled-components';

import { device } from '../../../util/screensizes';
import { layout, colors } from '../../../util/styling_vars';

export const Container = styled.footer`
    font-weight: 200;
    background-color: ${colors.blue};
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};
    color: white;
    font-size: 0.7em;
    position: relative;

    img {
        width: 50%;
        margin: auto;
        max-width: 150px;
        display: block;
        margin-bottom: 10%;
    }

    b {
        font-weight: 600;
        color: ${colors.turqouise};
    }

    a {
        display: block;
        color: ${colors.turqouise};
        font-weight: 400;
        text-decoration: underline;
    }

    #content {
        margin: auto;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
        grid-row-gap: 10px;
        justify-items: start;

        div,
        address {
            margin-bottom: 10%;
            display: inline-block;
            flex-direction: column;
            font-size: 16px;

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

        span {
            font-size: 1em;
        }
        margin-bottom: 1%;
    }
    #copy1 {
        position: absolute;
        bottom: 30px;
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

        div,
        address {
            width: auto;
            margin-right: 5%;
            margin-bottom: 5%;
        }

        #content {
            div {
                font-size: 14px;
                margin-top: 0;
            }
        }

        #copy {
            span {
                font-size: 1em;
            }
        }
    }

    @media ${device.laptop} {
        padding: calc(${layout.padding.height.laptop} - 2.5%) ${layout.padding.width.laptop};
    }

    @media ${device.desktop} {
        padding: ${layout.padding.height.desktop} ${layout.padding.width.desktop};
    }
`;
