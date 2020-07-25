import React, { useState } from "react";
import SearchResults from "./SearchResults";

import { TextField, Button, Icon } from "@material-ui/core";
import { Search as SearchIcon } from "@material-ui/icons";
import Internships from "../Internships";

function DomainSearch() {
  const [query, setQuery] = useState("");
  //const [searchResults, setSearchResults] = useState();
  const [apiresponse, setapiresponse] = useState();
  //console.log('searchResults :>> ', searchResults);

  const handleChange = (event) => {
    console.log("This is the new query");
    console.log(event.target.value);
    setQuery(event.target.value);
  };

  const handleSubmit = async () => {
    console.log(`http://localhost:8000/v1/getexperiences/${query}`);
    /*const response = await fetch(`http://localhost:8000/v1/getexperiences/${query}`, {
      credentials: 'include',
      mode: 'no-cors',
      headers: {
        'Content-Type': "text/event-stream"}
    });
    const json = await response.json(); */
    if (query.trim() == "Software") {
      setapiresponse(Internships.getSoftwareInternships());
    } else if (query.trim() == "Law") {
      setapiresponse(Internships.getLegalInternships());
    } else if (query.trim() == "Medical") {
      setapiresponse(Internships.getMedicalInternships());
    }

    //setSearchResults(json)
  };

  return (
    <div className="domain-search">
      <TextField
        placeholder="Search for Jobs/Internships"
        onChange={handleChange}
        value={query}
      />
      <Button onClick={handleSubmit}>
        <SearchIcon />
      </Button>
      {apiresponse && <SearchResults joblist={apiresponse} />}
    </div>
  );
}

export default DomainSearch;
