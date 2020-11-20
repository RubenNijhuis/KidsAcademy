import React, { useState } from 'react';

import { Container } from './style';
import { colors } from '../../../util/styling_vars';
import kennemer from './Kennemer-Lyceum.png';
import kidsproof from './kidsproof1.png';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import { FormattedMessage } from 'gatsby-plugin-intl';
import addToMailchimp from 'gatsby-plugin-mailchimp';
import styled from 'styled-components';

import { device } from '../../../util/screensizes';

const FormContainer = styled.div`
margin: auto;
    margin-bottom: 46px;
    background: rgba(0, 0, 0, 0.05);
    padding: 16px;
    height: fit-content;
    max-width: 550px;

`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: start;

    input {
        width: 100%;
        margin-bottom: 16px;
    }

    button {
        width: 100%;
    }

    @media ${device.tablet} {
    }
`;

const MailChimp = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addToMailchimp(email);
    };

    return (
        <FormContainer>
            <Form onSubmit={handleSubmit}>
                <h4 style={{ marginBottom: 16 }}>Meld je aan voor onze nieuws brief!</h4>
                    <input
                        style={{
                            padding: 6,
                            border: 'none',
                            borderRadius: 3,
                            border: `${colors.turqouise} 2px solid`,
                            display: 'block',
                        }}
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button
                        style={{
                            padding: '8px',
                            border: 'none',
                            borderRadius: 3,
                            background: colors.turqouise,
                            color: 'white',
                        }}
                        type="submit"
                    >
                        Meld je aan!
                    </button>
            </Form>
        </FormContainer>
    );
};

const Footer = () => (
    <>
        <MailChimp />
        <Container>
            <div id="content">
                <div>
                    <AniLink cover bg={`${colors.turqouise}`} to={`/`}>
                        Home
                    </AniLink>
                    <AniLink cover bg={`${colors.turqouise}`} to={`/cursussen`}>
                        <FormattedMessage id="cursussen_nav" />
                    </AniLink>
                    <AniLink cover bg={`${colors.turqouise}`} to={`/over-ons`}>
                        <FormattedMessage id="over-ons_nav" />
                    </AniLink>
                    <AniLink cover bg={`${colors.turqouise}`} to={`/blog`}>
                        <FormattedMessage id="blog_nav" />
                    </AniLink>
                    <AniLink cover bg={`${colors.turqouise}`} to={`/contact`}>
                        <FormattedMessage id="contact_nav" />
                    </AniLink>
                    <AniLink cover bg={`${colors.turqouise}`} to={`/voorwaarden`}>
                        <FormattedMessage id="voorwaarden_nav" />
                    </AniLink>
                </div>

                <div>
                    <span>
                        <b>Amsterdam</b>
                    </span>
                    <span>Nicolaas Klooster</span>
                    <span>Prinses Irenestraat 19</span>
                    <span>1077 WT Amsterdam</span>
                </div>

                <div>
                    <span>
                        <b>Amsterdam</b>
                    </span>
                    <span>Palmstraat 11</span>
                    <span>1015 HP Amsterdam</span>
                </div>

                <div>
                    <span>
                        <b>Laren</b>
                    </span>
                    <span>Brink 33</span>
                    <span>1251 KT Laren</span>
                </div>

                <div>
                    <span>
                        <b>Haarlem</b>
                    </span>
                    <span>Kennemer Lyceum</span>
                    <span>Adriaan Stoopplein 7</span>
                    <span>2051 KA Overveen</span>
                </div>

                <div>
                    <span>
                        <b>Rotterdam</b>
                    </span>
                    <span>Opening soon</span>
                </div>

                <div>
                    <span>
                        <FormattedMessage id="hoofdkantoor" />:{' '}
                        <a href="tel:0207173060">020 717 30 60</a>
                    </span>
                    <span>
                        E-mail: <a href="mailto:info@kidsacademy.nl">Info@kidsacademy.nl</a>
                    </span>
                </div>

                <div>
                    <a href="https://www.kennemerlyceum.nl" target="_">
                        <img src={kennemer} alt="afbeelding kennemer logo" />
                    </a>
                    <a href="https://www.kidsproof.nl/" target="_">
                        <img src={kidsproof} alt="afbeelding kidsproof logo" />
                    </a>
                </div>
            </div>

            <div>
                <div id="copy1">
                    <span>
                        Developed by:{' '}
                        <a href="https://louderminds.studio" target="_">
                            LouderMinds
                        </a>
                    </span>
                </div>
                <div id="copy">
                    <span>
                        ©Copyright 2020 | Kids Academy | All rights reserved | Design by{' '}
                        <a href="https://www.lestudiobrun.nl/" target="_">
                            Christel Pronk
                        </a>{' '}
                    </span>
                </div>
            </div>
        </Container>
    </>
);

export default Footer;
