/* eslint-disable no-unused-vars */
import React from "react";
import Head from "../components/head";
import GasketEmblem from "@gasket/assets/react/gasket-emblem";
import DomainSearch from "../components/SEARCH/DomainSearch";
import SearchBar from "../components/SearchBar";

import ReactDOM from "react-dom";
const pageStyle = { textAlign: "center" };
const logoStyle = { width: "250px", height: "250px" };

export const IndexPage = () => (
  <div style={pageStyle}>
    <h1>Work and Learning Experience Sharing Platform</h1>

    <SearchBar />
  </div>
);

export default IndexPage;
