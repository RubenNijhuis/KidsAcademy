import React from 'react';
import { Container } from './style';
import { useStaticQuery, graphql } from 'gatsby';
import Title from '../Typography/Title';
import { FormattedMessage, injectIntl } from 'gatsby-plugin-intl';
const klassen = ['Groep 5', 'Groep 6', 'Groep 7', 'Groep 8', 'Voortgezet onderwijs'];

const KennismakingsFormulier = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulCursus(filter: { node_locale: { eq: "nl" } }) {
                edges {
                    node {
                        titel
                    }
                }
            }
        }
    `);

    return (
        <Container>
            <Title type="h2">
                <FormattedMessage id="aanvraag-kennismakingsgesprek"></FormattedMessage>
            </Title>
            <form
                method="POST"
                name="contact"
                netlify-honeypot="bot-field"
                data-netlify="true"
                action="/success"
            >
                <input type="hidden" name="form-name" value="contact" />
                <div className="naamverzorger">
                    <div>
                        <label htmlFor="first_name_child">Voornaam kind*</label>
                        <input type="text" name="first_name_child" id="first_name_child" required />
                    </div>
                    <div>
                        <label htmlFor="last_name_child">Achternaam kind*</label>
                        <input type="text" name="last_name_child" id="last_name_child" required />
                    </div>
                    <div>
                        <label htmlFor="last_name_child">Adres*</label>
                        <input type="text" name="last_name_child" id="last_name_child" required />
                    </div>
                </div>
                <hr />

                <div className="klas">
                    <div>
                        <label htmlFor="school">School*</label>
                        <input type="text" name="school" id="school" required />
                    </div>
                    <span>Mijn kind zit in*</span>
                    <select name="klas" required>
                        {klassen.map((item, j) => (
                            <option type="radio" name="groep" value={`${item}`} key={j}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
                <hr />

                <div className="naamverzorger">
                    <div>
                        <label htmlFor="first_name_parent">Voornaam ouder/verzorger*</label>
                        <input
                            type="text"
                            name="first_name_parent"
                            id="first_name_parent"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="last_name_parent">Achternaam ouder/verzorger*</label>
                        <input type="text" name="last_name_parent" id="last_name_parent" required />
                    </div>
                    <div>
                        <label htmlFor="telephone_number">Telefoon*</label>
                        <input type="tel" name="telephone_number" id="telephone_number" required />
                    </div>
                    <div>
                        <label htmlFor="email">E-mail adres*</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                </div>
                <hr />

                <div className="interesse">
                    <h3>Ik heb een vraag/vragen over*</h3>
                    {data.allContentfulCursus.edges.map(({ node }, j) => {
                        const { titel } = node;
                        return (
                            <div key={j}>
                                <input type="checkbox" name={`${titel}`} value="✓" />
                                <label>{titel}</label>
                                <br />
                            </div>
                        );
                    })}
                </div>
                <hr />

                <div className="textmessage">
                    <label htmlFor="message">Opmerking/Vraag:</label>
                    <textarea name="message" rows="5" id="message" />
                </div>

                <button type="submit">
                    <FormattedMessage id="verstuur" />
                </button>
                {/* <ReCAPTCHA sitekey="YOUR_SITE_KEY" />*/}
            </form>
        </Container>
    );
};

export default injectIntl(KennismakingsFormulier);
