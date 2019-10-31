import React from 'react';
import { Link } from 'gatsby';

import { Layout } from '../components/Layout';
import Image from './image';

const IndexPage = () => (
  <Layout>
    <h1>Hi there!</h1>
    <p>
      <strong>Thanks for using awesome-gatsby-starter!</strong> Remember to{' '}
      <a href="https://github.com/South-Paw/awesome-gatsby-starter">drop a ⭐ on the project</a> if you find it useful.
    </p>
    <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
      <Image name={'チャック師匠A'} />
      <Image name={'チャック師匠B'} />
      <Image name={'チャック師匠C'} />
      <Image name={'チャック師匠D'} />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
