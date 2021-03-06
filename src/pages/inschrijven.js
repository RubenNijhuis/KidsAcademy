import React from 'react';

import Layout from '../components/Layout';
import InschrijfFormulier from '../components/InschrijfFormulier';
import SEO from '../components/SEO';

const Inschijven = () => (
    <Layout showNewsLetter={false}>
        <SEO siteTitle="Inschrijven" />
        <InschrijfFormulier />
    </Layout>
);

export default Inschijven;
