/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import NextHead from 'next/head';

const Head = ({ title, description }) => (
  <NextHead>
    <meta charSet='UTF-8'/>
    <title>{title}</title>
    <meta name='description' content={ description }/>
    <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no'/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  </NextHead>
);

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

Head.defaultProps = {
  title: 'simple-domain-search',
  description: 'A basic gasket app'
};

export default Head;
