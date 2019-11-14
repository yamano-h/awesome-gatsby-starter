import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/Layout';

const SecondPage = () => (
  <Layout>
    <h1>Hi</h1>
    <p>Welcome to page 4</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
