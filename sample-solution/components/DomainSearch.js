import React, { useState } from 'react';
import SearchResults from './SearchResults';

import { TextField, Button, Icon } from '@material-ui/core';
import { Search as SearchIcon } from "@material-ui/icons";

function DomainSearch() {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState();
  console.log('searchResults :>> ', searchResults);
  
  const handleChange = (event) => {
    setQuery(event.target.value)
  };

  const handleSubmit = async () => {
    const response = await fetch(`https://api.godaddy.com/v1/domains/available?domain=${query}`, {
      credentials: 'include'
    });
    const json = await response.json();
    setSearchResults(json)
  }

  return (
    <div className="domain-search">
      <TextField placeholder="enter domain name" onChange={handleChange} value={query} />
      <Button onClick={handleSubmit}><SearchIcon /></Button>
      {searchResults &&
        <SearchResults
          domain={searchResults.domain}
          available={searchResults.available}
          price={searchResults.price}
        />
      }
    </div>
  );
}

export default DomainSearch;