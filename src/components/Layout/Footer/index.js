import React from 'react';

import { Container } from './style';
import { colors } from '../../../util/styling_vars';
import kennemer from './Kennemer-Lyceum.png';
import kidsproof from './kidsproof1.png';
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const Footer = () => (
    <Container>
        <div id="content">
            <div>
                <AniLink cover bg={`${colors.turqouise}`} to={`/`}>
                    Home
                </AniLink>
                <AniLink cover bg={`${colors.turqouise}`} to={`/cursussen`}>
                    Cursussen
                </AniLink>
                <AniLink cover bg={`${colors.turqouise}`} to={`/over-ons`}>
                    Over ons
                </AniLink>
                <AniLink cover bg={`${colors.turqouise}`} to={`/blog`}>
                    Blog
                </AniLink>
                <AniLink cover bg={`${colors.turqouise}`} to={`/contact`}>
                    Contact
                </AniLink>
                <AniLink cover bg={`${colors.turqouise}`} to={`/voorwaarden`}>
                    Algemene voorwaarden
                </AniLink>
            </div>

            <div>
                <span>Kids Academy Amsterdam</span>
                <span>Nicolaas Klooster</span>
                <span>Prinses Irenestraat 19</span>
                <span>1077 WT Amsterdam</span>
            </div>

            <div>
                <span>Kids Academy Laren</span>
                <span>Brink 33</span>
                <span>1251 KT Laren</span>
            </div>

            <div>
                <span>Kids Academy Haarlem</span>
                <span>Kennemer Lyceum</span>
                <span>Adriaan Stoopplein 7</span>
                <span>2051 KA Overveen</span>
            </div>

            <div>
                <span>Kids Academy Rotterdam</span>
                <span>Opening soon</span>
            </div>

            <div>
                <span>
                    Hoofdkantoor: <a href="tel:0207173060">020 717 30 60</a>
                </span>
                <span>
                    Email:{' '}
                    <a href="mailto:info@kidsacademy.nl">Info@kidsacademy.nl</a>
                </span>
            </div>

            <div>
                <img src={kennemer} alt="afbeelding kennemer logo" />
                <img src={kidsproof} alt="afbeelding kidsproof logo" />
            </div>
            {/* <div>
            </div> */}
        </div>

        <div>
            <div id="copy1">
                <span>
                    Developed by:{' '}
                    <a href="https://rubennijhuis.com" target="_">
                        Ruben Nijhuis
                    </a>
                </span>
            </div>
            <div id="copy">
                <span>
                    ©Copyright 2020 | Kids Academy | All rights reserved |
                    Design by Christel Pronk{' '}
                </span>
            </div>
        </div>
    </Container>
);

export default Footer;
