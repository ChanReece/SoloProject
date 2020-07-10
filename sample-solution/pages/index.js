/* eslint-disable no-unused-vars */
import React from 'react';
import Head from '../components/head';
import GasketEmblem from '@gasket/assets/react/gasket-emblem';
import DomainSearch from '../components/DomainSearch';

const pageStyle = { textAlign: 'center' };
const logoStyle = { width: '250px', height: '250px' };

export const IndexPage = () => (
  <div style={ pageStyle }>
    <DomainSearch />
  </div>
);

export default IndexPage;
