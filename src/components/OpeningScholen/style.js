import styled from 'styled-components';
import { layout, colors } from '../../util/styling_vars';
import { device } from '../../util/screensizes';

export const Container = styled.div`
    padding: ${layout.padding.height.mobile} ${layout.padding.width.mobile};

    .buttons {
        margin-bottom: 5%;
        button {
            display: inline-block;
            width: 100%;
            border: none;
            background: none;

            a {
                text-align: center;
                width: 100%;
                border-radius: 3px;
                display: block;
                background: ${colors.turqouise};
                width: 100%;
                margin-bottom: 5%;
                color: white;
                padding: 15px 0;
            }
        }
    }

    .imgbox {
        padding: 0 0 15px 15px;
        height: 100%;
        width: 100%;
        max-width: 400px;
        max-height: 400px;

        div {
            height: 100%;
            width: 100%;
            max-width: 400px;
            max-height: 400px;
            min-height: 200px !important;
            box-shadow: -15px 15px 0 ${colors.turqouise};
        }
    }

    h1 {
        margin-top: 0;
        margin-bottom: 1em;
    }

    @media ${device.tablet} {
        padding: ${layout.padding.height.tablet} ${layout.padding.width.tablet};

        .imgbox {
            margin: auto;
        }
    }

    @media ${device.laptop} {
        display: grid;

        justify-items: center;
        padding: 5%;
        margin-bottom: 5%;
        grid-column-gap: 50px;
        align-items: center;
        grid-template-columns: 3fr 2fr;

        h1 {
            font-size: 3em;
            font-weight: bold;
            text-align: left;
            padding: 0;
        }

        .buttons {
            a {
                &:hover {
                    text-decoration: none;
                }
            }
            display: flex;
            justify-content: space-between;
            width: 100%;
            min-width: 100%;
            button {
                max-width: 45%;
                min-width: 45%;
            }
        }
    }
`;
