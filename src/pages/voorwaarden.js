import React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import Title from '../components/Typography/Title';
import { graphql } from 'gatsby';
import Voorwaarden from '../components/Voorwaarden';
export const query = graphql`
    query {
        contentfulAlgemeneVoorwaarden {
            tekst {
                json
            }
        }
    }
`;

const VoorwaardenPage = ({ data }) => (
    <Layout showNewsLetter={false}>
        <SEO siteTitle="Voorwaarden" />
        <Title type="h1">Algemene voorwaarden</Title>
        <Voorwaarden content={data.contentfulAlgemeneVoorwaarden.tekst} />
    </Layout>
);

export default VoorwaardenPage;
