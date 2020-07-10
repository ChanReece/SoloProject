import React from 'react';

function SearchResults({ available, price, domain }) {

  const text = available
  ? `Good News! ${domain} is available for ${price}`
  : `Sorry! ${domain} is not available`

  return (
    <div>{text}</div>
  )
}

export default SearchResults;